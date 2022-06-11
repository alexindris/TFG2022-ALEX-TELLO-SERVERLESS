import { Application } from "shared/models/Application";
import { SQSEvent } from "aws-lambda";
import { sendNotification } from "../services/sendNotificationService";
import fetch from "node-fetch";

export async function score(event: SQSEvent) {
  const applications: Application[] = event.Records.map((record) =>
    JSON.parse(record.body)
  );

  applications.forEach(async (application: Application) => {
    //  Make a request to the mock API to get the score
    const result = await fetch(
      "https://62a46144259aba8e10e750c0.mockapi.io/scoring/api/v1/apply",
      {
        method: "POST",
        body: JSON.stringify(application),
      }
    );

    const response = (await result.json()) as response;

    application.score = response.score;
    sendNotification(process.env.RESULT_QUEUE_NAME, application);
  });
}

type response = {
  createdAt: string;
  score: number;
  id: string;
};
