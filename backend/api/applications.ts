import { randomUUID } from "crypto";
import { connectToDatabase } from "../database/mongodb";
import { type Application } from "shared/models/Application";
import { ObjectId } from "bson";
import { sendNotification } from "../services/sendNotificationService";
import { type APIGatewayProxyResult, type Context,type APIGatewayEvent } from "aws-lambda";

export async function getAll(event:APIGatewayEvent, context:Context): Promise<APIGatewayProxyResult> {
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

export async function create(event:APIGatewayEvent, context:Context): Promise<APIGatewayProxyResult> {
  context.callbackWaitsForEmptyEventLoop = false;
  const db = await connectToDatabase();

  const requestBody = event.body;
  if (requestBody == null) {
    throw new Error("Missing request body.");
  }

  const application: Application = JSON.parse(requestBody);

  application._id = new ObjectId();
  application.FirstApplicant.applicantNumber = randomUUID().toString();
  application.SecondApplicant.applicantNumber = randomUUID().toString();

  // Add the application to the database
  await db.collection("Application").insertOne(application);

  // Send a message to the queue to score the application

  await sendNotification(process.env.SCORING_QUEUE_NAME?? 'scoring_queue_name', application);

  return {
    statusCode: 200,
    body: JSON.stringify(application),
    headers: { "Content-Type": "application/json" },
  };
}

export async function getOne(event:APIGatewayEvent, context:Context): Promise<APIGatewayProxyResult> {
  context.callbackWaitsForEmptyEventLoop = false;
  const db = await connectToDatabase();

  const id = new ObjectId(event.pathParameters?.id);

  const application = (await db
    .collection("Application")
    .findOne({ _id: id })) ;

  if (application == null) {
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
