import { SQSEvent } from "aws-lambda";
import { ObjectId } from "mongodb";
import { Application } from "shared/models/Application";
import { connectToDatabase } from "../database/mongodb";

export async function save(event: SQSEvent) {
  const applications: Application[] = event.Records.map((record) =>
    JSON.parse(record.body)
  );
  const db = await connectToDatabase();

  applications.forEach((application) => {
    db.collection("Application").updateOne(
      { _id: new ObjectId(application._id) },
      { $set: { score: application.score } }
    );
  });

  return {};
}
