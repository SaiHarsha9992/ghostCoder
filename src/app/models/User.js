import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensure the email is unique
    },
    lastLogin: {
      type: Date,
      default: Date.now, // Set default to current time if not provided
    },
    provider: {
      type: String,
      required: true, // Ensure provider is always set (e.g., Google, GitHub)
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
    collection: "Users",
  }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
