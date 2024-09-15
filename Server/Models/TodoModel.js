import mongoose, { Schema } from "mongoose";

const TodoSchema = new Schema(
  {
    text: {
      type: String,
      require: true,
    },
    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  { timestamps: true }
);

const Todo = mongoose.model("task", TodoSchema);

export default Todo;
