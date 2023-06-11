import * as mongodb from "mongodb";

const MongoClient = mongodb.MongoClient;

// Once we connect to the database once, we'll store that connection
// and reuse it so that we don't have to connect to the database on every request.
let cachedDb: mongodb.Db | null = null;

export async function connectToDatabase(): Promise<mongodb.Db> {
  if (cachedDb != null) {
    return cachedDb;
  }

  // Connect to our MongoDB database hosted on MongoDB Atlas
  const client = await MongoClient.connect(process.env.DATABASE_URL??'');

  // Specify which database we want to use
  cachedDb = client.db(process.env.DATABASE_NAME);

  return cachedDb;
}
