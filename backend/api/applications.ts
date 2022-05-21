import AWS from "aws-sdk";
import { connectToDatabase } from "../database/mongodb";

// export async function main(event, context) {
//   // By default, the callback waits until the runtime event loop is empty
//   // before freezing the process and returning the results to the caller.
//   // Setting this property to false requests that AWS Lambda freeze the
//   // process soon after the callback is invoked, even if there are events
//   // in the event loop.
//   context.callbackWaitsForEmptyEventLoop = false;

//   //Get counter information from the database
//   const counter = await db.collection("counter").find({ id: "counter" });

//   // If there is a row, then get the value of the
//   // column called "tally"
//   // let count = results.Item ? results.Item.tally : 0;

//   return {
//     statusCode: 200,
//     body: count,
//   };
// }

export async function getAll(event, context) {
  context.callbackWaitsForEmptyEventLoop = false;
  const db = await connectToDatabase();

  // Get all applications from the database
  const applications = await db.collection("applications").find({}).toArray();
  console.log(applications);

  return {
    statusCode: 200,
    body: JSON.stringify(applications),
  };
}

export async function create(event, context) {
  context.callbackWaitsForEmptyEventLoop = false;
  const db = await connectToDatabase();

  const application = JSON.parse(event.body);

  // Add the application to the database
  await db.collection("applications").insertOne(application);

  return {
    statusCode: 200,
    body: JSON.stringify(application),
  };
}
