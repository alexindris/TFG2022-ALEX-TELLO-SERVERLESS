import { Application } from "shared/models/Application";
import { SQSEvent } from "aws-lambda";
import { sendNotification } from "../services/sendNotificationService";
import fetch from "node-fetch";

export async function score(event: SQSEvent) {
  const applications: Application[] = event.Records.map((record) =>
    JSON.parse(record.body)
  );

  applications.forEach(async (application: Application) => {
    const result = await fetch(
      "http://www.randomnumberapi.com/api/v1.0/random?min=1&max=100&count=1"
    );

    const score = await result.json();

    application.score = score[0];
    sendNotification(process.env.RESULT_QUEUE_NAME, application);
  });
}
