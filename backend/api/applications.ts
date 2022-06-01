import { randomUUID } from "crypto";
import { connectToDatabase } from "../database/mongodb";
import { Application } from "shared/models/Application";
import { ObjectId } from "bson";
import { sendNotification } from "../services/sendNotificationService";

export async function getAll(event, context) {
  context.callbackWaitsForEmptyEventLoop = false;

  // Get all applications from the database
  const db = await connectToDatabase();

  const applications: Application[] = (await db
    .collection("Application")
    .find()
    .toArray()) as unknown as Application[];

  return {
    statusCode: 200,
    body: JSON.stringify(applications),
    headers: { "Content-Type": "application/json" },
  };
}

export async function create(event, context) {
  context.callbackWaitsForEmptyEventLoop = false;
  const db = await connectToDatabase();

  const application: Application = JSON.parse(event.body);

  application._id = new ObjectId();
  application.FirstApplicant.applicantNumber = randomUUID().toString();
  application.SecondApplicant.applicantNumber = randomUUID().toString();

  // Add the application to the database
  db.collection("Application").insertOne(application);

  // Send a message to the queue to score the application

  await sendNotification(process.env.SCORING_QUEUE_NAME, application);

  return {
    statusCode: 200,
    body: JSON.stringify(application),
    headers: { "Content-Type": "application/json" },
  };
}

export async function getOne(event, context) {
  context.callbackWaitsForEmptyEventLoop = false;
  const db = await connectToDatabase();

  const id = new ObjectId(event.pathParameters.id);

  const application: Application | null = (await db
    .collection("Application")
    .findOne({ _id: id })) as unknown as Application;

  if (!application) {
    return {
      statusCode: 404,
      body: "Application not found",
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(application),
    headers: { "Content-Type": "application/json" },
  };
}
