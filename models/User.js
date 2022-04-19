import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Default User",
  },
  uid: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },

  score: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("User", userSchema, "Users");
