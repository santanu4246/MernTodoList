import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      require: true,
      unique:true
    },
    username: {
      type: String,
    },
    password: {
      type: String,
      require: true,
    },
    task: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "task",
      },
    ],
  },
 
);

const User = mongoose.model("user", userSchema);

export default User;
