import React, { useEffect, useState } from "react";
import { addTodo, deleteTodo, getAllTodo } from "../../Utils/HandelApi";
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [userID, setuserID] = useState(localStorage.getItem("userId"));
  // localStorage.setItem("todoid", todo._id);
  useEffect(() => {
    console.log(userID);
  }, [userID]);


  useEffect(() => {
    getAllTodo(setTodos);
  });
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Todo App
        </h1>

        {/* Input section */}
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Add a new todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={() => addTodo(text, setText, setTodos, userID)}
            className="px-6 py-2 bg-indigo-500 text-white rounded-r-lg hover:bg-indigo-600 transition"
          >
            Add
          </button>
        </div>

        {/* Todo List */}
        <ul className="space-y-2">
          {todos.length > 0 ? (
            todos.map((todo, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm"
              >
                <span className="text-gray-700">{todo.text}</span>
                <button
                  onClick={() => deleteTodo(todo._id, setTodos)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  Delete
                </button>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500">No todos yet!</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
