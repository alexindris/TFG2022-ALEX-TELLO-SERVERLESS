import AWS from "aws-sdk";

export async function sendNotification(queueName: string, data: unknown): Promise<void> {
  const sqs = new AWS.SQS();

  const queueUrlResponse = await sqs.getQueueUrl({ QueueName: queueName }).promise();
  const queueUrl = queueUrlResponse.QueueUrl;

  if (queueUrl == null) {
    throw new Error('Queue URL not found.');
  }

  await sqs.sendMessage({
    QueueUrl: queueUrl,
    MessageBody: JSON.stringify(data),
  }).promise().catch((err) => {
    throw err;
  });
}
