import { randomUUID } from "crypto";
import {
  db,
  connectToDatabase,
  disconnectFromDatabase,
} from "../database/mongodb";

export async function getAll(event, context) {
  context.callbackWaitsForEmptyEventLoop = false;

  // Get all applications from the database
  connectToDatabase();

  const applications = await db.application.findMany();

  disconnectFromDatabase();
  return {
    statusCode: 200,
    body: applications,
  };
}

export async function create(event, context) {
  context.callbackWaitsForEmptyEventLoop = false;
  connectToDatabase();

  const application = JSON.parse(event.body);

  application.id = randomUUID().toString();

  // Add the application to the database
  await db.application.create({ data: application });

  disconnectFromDatabase();
  return {
    statusCode: 200,
    body: application,
  };
}

export async function getOne(event, context) {
  context.callbackWaitsForEmptyEventLoop = false;
  connectToDatabase();

  const id = event.pathParameters.id;

  const application = await db.application.findUnique({ where: { id: id } });

  if (!application) {
    return {
      statusCode: 404,
      body: "Application not found",
    };
  }

  return {
    statusCode: 200,
    body: application,
  };
}
