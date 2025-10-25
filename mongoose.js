import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_URL, {
      useNewURLParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connection Successful!");
  } catch (error) {
    console.log("❌ Connection Failed!");
  }
};

export default connectDB;
