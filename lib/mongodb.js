// mystore/lib/mongodb.js

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

if (!uri) {
  throw new Error("Please add your MONGODB_URI to .env.local");
}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect().then((c) => {
      // --- ADD THIS LOG ---
      console.log("✅ MongoDB Atlas connected successfully!");
      return c;
    });
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect().then((c) => {
    // --- ADD THIS LOG ---
    console.log("✅ MongoDB Atlas connected successfully!");
    return c;
  });
}

export default clientPromise;
