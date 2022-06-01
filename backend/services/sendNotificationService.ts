import AWS from "aws-sdk";

export async function sendNotification(queueName: string, data: Object) {
  const sqs = new AWS.SQS();

  const queueUrl = await sqs.getQueueUrl({ QueueName: queueName }).promise();

  await sqs
    .sendMessage({
      QueueUrl: queueUrl.QueueUrl,
      MessageBody: JSON.stringify(data),
    })
    .promise()
    .catch((err) => {
      throw err;
    });
}
