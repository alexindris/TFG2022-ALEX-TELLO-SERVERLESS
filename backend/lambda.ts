import AWS from "aws-sdk";
import { db } from "./database/mongodb";

export async function main(event, context) {
  // By default, the callback waits until the runtime event loop is empty
  // before freezing the process and returning the results to the caller.
  // Setting this property to false requests that AWS Lambda freeze the
  // process soon after the callback is invoked, even if there are events
  // in the event loop.
  context.callbackWaitsForEmptyEventLoop = false;

  //Get counter information from the database
  const counter = await db.collection("counter").find({ id: "counter" });

  // If there is a row, then get the value of the
  // column called "tally"
  let count = results.Item ? results.Item.tally : 0;

  const putParams = {
    TableName: process.env.tableName,
    Key: {
      counter: "clicks",
    },
    // Update the "tally" column
    UpdateExpression: "SET tally = :count",
    ExpressionAttributeValues: {
      // Increase the count
      ":count": ++count,
    },
  };
  await dynamoDb.update(putParams).promise();

  return {
    statusCode: 200,
    body: count,
  };
}
