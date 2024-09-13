import TodoModel from "../Models/TodoModel.js";

const getTodo = async (req, res) => {
  const Todo = await TodoModel.find();
  res.send(Todo);
};

const saveTodo = async (req, res) => {
  const { text } = await req.body;

  TodoModel.create({ text })
    .then((data) => {
      console.log("added succesfully....");
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ msg: "error" });
    });
};

const updateTodo = async (req,res)=>{
    const {_id, text} = req.body
    TodoModel.findByIdAndUpdate(_id,{text})
    .then(()=> res.send("updated sucessfuly..."))
    .catch((err)=> console.log(err))
}
const deleteTodo = async (req,res)=>{
    const {_id} = req.body
    TodoModel.findByIdAndDelete(_id)
    .then(()=> res.send("deleted sucessfuly..."))
    .catch((err)=> console.log(err))
}

export { getTodo, saveTodo,updateTodo, deleteTodo};
