import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb"; // Import the cached connection promise

const dbName = "ecommerce"; // Ensure this matches your desired database name in Atlas
const collectionName = "cart";

async function getCartCollection() {
  const client = await clientPromise;
  const db = client.db(dbName);
  return db.collection(collectionName);
}

// Handler for GET (Fetch all cart items)
export async function GET() {
  try {
    const collection = await getCartCollection();
    const cartItems = await collection.find({}).toArray();
    return NextResponse.json(cartItems, { status: 200 });
  } catch (error) {
    console.error("GET Cart Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch cart items" },
      { status: 500 }
    );
  }
}

// Handler for POST (Add a new item to cart)
export async function POST(req) {
  try {
    const {
      id,
      title,
      price,
      image,
      category,
      quantity = 1,
    } = await req.json();
    const collection = await getCartCollection();

    // Check if item already exists based on the provided 'id' (string)
    const existingItem = await collection.findOne({ id: id });

    if (existingItem) {
      // If it exists, update the quantity
      const newQuantity = existingItem.quantity + quantity;
      await collection.updateOne(
        { id: id },
        { $set: { quantity: newQuantity } }
      );
      return NextResponse.json(
        {
          message: "Item quantity updated",
          item: { ...existingItem, quantity: newQuantity },
        },
        { status: 200 }
      );
    } else {
      // Otherwise, insert the new item
      const newItem = { id, title, price, image, category, quantity };
      await collection.insertOne(newItem);
      return NextResponse.json(
        { message: "Item added to cart", item: newItem },
        { status: 201 }
      );
    }
  } catch (error) {
    console.error("POST Cart Error:", error);
    return NextResponse.json(
      { error: "Failed to add item to cart" },
      { status: 500 }
    );
  }
}

// Handler for DELETE (Remove an item from cart)
export async function DELETE(req) {
  try {
    // Read the request body to get the ID
    const body = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ error: "Missing item ID" }, { status: 400 });
    }

    const collection = await getCartCollection();
    const result = await collection.deleteOne({ id: id }); // Deleting based on the string 'id' field

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { message: "Item not found in cart" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Item removed from cart" },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE Cart Error:", error);
    return NextResponse.json(
      { error: "Failed to remove item from cart" },
      { status: 500 }
    );
  }
}
