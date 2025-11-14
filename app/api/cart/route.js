// app/api/cart/route.js
import { MongoClient } from "mongodb";

// MongoDB client setup
const client = new MongoClient(process.env.MONGODB_URI);
const dbName = "ecommerce"; // Database name
const collectionName = "cart"; // Collection name

// MongoDB connection function
async function connectToDatabase() {
  if (!client.isConnected()) {
    await client.connect();
  }
  const db = client.db(dbName);
  return db.collection(collectionName);
}

// API Route handler for cart
export async function GET(req) {
  const collection = await connectToDatabase();
  const cartItems = await collection.find({}).toArray();
  return new Response(JSON.stringify(cartItems), { status: 200 });
}

export async function POST(req) {
  const { id, title, price, image, category } = await req.json();
  const collection = await connectToDatabase();
  const newItem = { id, title, price, image, category };
  await collection.insertOne(newItem);
  return new Response(
    JSON.stringify({ message: "Item added to cart", item: newItem }),
    { status: 201 }
  );
}

export async function DELETE(req) {
  const { id } = await req.json();
  const collection = await connectToDatabase();
  await collection.deleteOne({ id });
  return new Response(JSON.stringify({ message: "Item removed from cart" }), {
    status: 200,
  });
}
console.log("Mongo URI:", process.env.MONGODB_URI);
