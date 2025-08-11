import mongoose from "mongoose";

export async function dbconnect(params) {
  try {
    const client = await mongoose.connect(process.env.MONGO_URI);

    console.log("connected");
    return client;
  } catch (e) {
    console.log(e);
  }
}
