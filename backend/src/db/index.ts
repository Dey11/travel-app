import mongoose, { mongo } from "mongoose";

export const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
  }
};
