import { MongoClient, Db, Collection } from "mongodb";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function getDb(): Promise<Db> {
  if (cachedDb && cachedClient) return cachedDb;

  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB;

  if (!uri) throw new Error("MONGODB_URI is not set");
  if (!dbName) throw new Error("MONGODB_DB is not set");

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;
  return db;
}

export async function getContactsCollection(): Promise<Collection> {
  const db = await getDb();
  return db.collection("contacts");
}


