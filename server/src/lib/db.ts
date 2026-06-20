import mongoose from "mongoose";

let databaseReady = false;

export async function connectDatabase() {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    console.warn(
      "No MONGODB_URI provided. The server will run in demo mode and contact messages will stay in memory."
    );
    return false;
  }

  try {
    await mongoose.connect(mongoUri);
    databaseReady = true;
    console.log("MongoDB connected.");
    return true;
  } catch (error) {
    databaseReady = false;
    console.error("MongoDB connection failed. Falling back to in-memory storage.", error);
    return false;
  }
}

export function hasDatabaseConnection() {
  return databaseReady && mongoose.connection.readyState === 1;
}
