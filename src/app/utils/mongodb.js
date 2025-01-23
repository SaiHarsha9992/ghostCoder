import mongoose from "mongoose";
const connectionUrl =
  "mongodb+srv://gaduharsha72:fe5Uhd3yXymJI2fK@cluster0.npekr7c.mongodb.net/Users?retryWrites=true&w=majority&appName=Cluster0";

const connectToDatabase = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(connectionUrl, {
      dbName: "Users",
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

export default connectToDatabase;
