import mongoose, { Schema } from "mongoose";

const TodoSchema = new Schema({
    text:{
        type:String,
        require:true
    }
})

const Todo = mongoose.model("task",TodoSchema)

export default Todo