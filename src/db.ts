import "dotenv/config";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_URL || "")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
