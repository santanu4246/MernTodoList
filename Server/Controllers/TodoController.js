import TodoModel from "../Models/TodoModel.js";
import User from "../Models/UserModel.js";
const getTodo = async (req, res) => {
  const { id } = req.params;
 try {
    const todos = await TodoModel.find({ user: id });
    res.send(todos);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};


const saveTodo = async (req, res) => {
  try {
    const { text, user } = req.body;

    const newTodo = new TodoModel({ text, user });
    const savedTodo = await newTodo.save();

    res.status(200).json({ msg: "Todo saved successfully"});
    await User.findByIdAndUpdate(
      user,
      { $push: { task: savedTodo._id } },
      { new: true } 
    );
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error saving todo" });
  }
};
;

const updateTodo = async (req,res)=>{
    const {_id, text} = req.body
    TodoModel.findByIdAndUpdate(_id,{text})
    .then(()=> res.send("updated sucessfuly..."))
    .catch((err)=> console.log(err))
}
const deleteTodo = async (req,res)=>{
    const {_id} = req.body
    TodoModel.findByIdAndDelete(_id)
    .then(()=> res.status(200).json({ msg: "Todo deleted successfully"}))
    .catch((err)=> res.send(err))
}

export { getTodo, saveTodo,updateTodo, deleteTodo};
