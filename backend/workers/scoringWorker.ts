import { type Application } from "shared/models/Application";
import { type SQSEvent } from "aws-lambda";
import { sendNotification } from "../services/sendNotificationService";
import fetch from "node-fetch";

export async function score(event: SQSEvent):Promise<void> {
  const applications: Application[] = event.Records.map((record) =>
    JSON.parse(record.body)
  );

  for (const application of applications) {
    const result = await fetch(
      "https://62a46144259aba8e10e750c0.mockapi.io/scoring/api/v1/apply",
      {
        method: "POST",
        body: JSON.stringify(application),
      }
    );

    const response = await result.json() as Response;

    application.score = response.score;
    await sendNotification(process.env.RESULT_QUEUE_NAME?? 'RESULT_QUEUE_NAME' , application);
  }
}


interface Response {
  createdAt: string;
  score: number;
  id: string;
}
