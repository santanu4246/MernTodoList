import axios from "axios";

const baseUrl = "https://merntodolist-sshj.onrender.com";

const getAllTodo = (setTodos) => {
  let id = localStorage.getItem("userId");
  axios.get(`${baseUrl}/todo/${id}`).then(({ data }) => {
    setTodos(data);
  });
};

const addTodo = (text, settext, setTodos,userID) => {
  axios
    .post(`${baseUrl}/todo/save`, { text, user: userID })
    .then((data) => {
      console.log(data);
      settext("");
      getAllTodo(setTodos);
    })
    .catch((err) => console.log(err));
};

const deleteTodo = (_id, setTodos) => {
  axios.post(`${baseUrl}/todo/delete`, { _id }).then(() => {
    getAllTodo(setTodos);
  });
};

const signup = async (formData) => {


  await axios
  .post(`${baseUrl}/regiser`, formData)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

const login = async (formData, navigate) => {
  await axios
    .post(`${baseUrl}/login`, formData)
    .then((res) => {
      console.log(res.data.user._id);
      localStorage.setItem('userId', res.data.user._id);
      navigate('/todo')
    })
    .catch((err) => console.log(err));
};
export { getAllTodo, addTodo, deleteTodo, signup, login };
