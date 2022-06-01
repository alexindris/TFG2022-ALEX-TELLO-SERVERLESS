import { Application } from "shared/models/Application";
import { SQSEvent } from "aws-lambda";
import { sendNotification } from "../services/sendNotificationService";

export async function score(event: SQSEvent) {
  const applications: Application[] = event.Records.map((record) =>
    JSON.parse(record.body)
  );

  applications.forEach((application: Application) => {
    application.score = getRandomInt(0, 100);
    sendNotification(process.env.RESULT_QUEUE_NAME, application);
  });

  return {};
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}
