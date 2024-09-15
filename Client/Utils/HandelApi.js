import axios from "axios";

const baseUrl = "http://localhost:5000";

const getAllTodo = (setTodos) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log(data);
    setTodos(data);
  });
};

const addTodo = (text, settext, setTodos) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then((data) => {
      console.log(data);
      settext("");
      getAllTodo(setTodos);
    })
    .catch((err) => console.log(err));
};

const deleteTodo = (_id, setTodos) => {
  axios.post(`${baseUrl}/delete`, { _id }).then(() => {
    getAllTodo(setTodos);
  });
};

const signup = async (formData) => {
  await axios
    .post(`${baseUrl}/regiser`, formData)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

const login = async (formData) => {
  await axios
    .post(`${baseUrl}/login`, formData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};
export { getAllTodo, addTodo, deleteTodo, signup, login };
