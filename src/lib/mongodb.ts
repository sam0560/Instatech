import { MongoClient } from "mongodb";

const uri: string = process.env.MONGODB_URI as string;
const options = {};  

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client
      .connect()
      .then(() => {
        console.log("Connected to MongoDb successfully");
        return client;
      })
      .catch((err) => {
        console.error("Failed to connect to MongoDB", err);
        throw err;
      });
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client
    .connect()
    .then(() => {
      console.log("Connected to MongoDB successfully");
      return client;
    })
    .catch((err) => {
      console.error("Failed to connect to MongoDB", err);
      throw err;
    });
}

export default clientPromise;
