import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

export async function connectToDatabase() {
  await db.$connect();
}

export async function disconnectFromDatabase() {
  await db.$disconnect();
}
