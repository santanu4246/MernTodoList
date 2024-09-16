import axios from "axios";
import { toast } from "react-toastify";
const baseUrl = " http://localhost:5000";

const getAllTodo = (setTodos) => {
  let id = localStorage.getItem("userId");
  axios.get(`${baseUrl}/todo/${id}`).then(({ data }) => {
    setTodos(data);
  });
};

const addTodo = (text, settext, setTodos,userID) => {
  axios
    .post(`${baseUrl}/todo/save`, { text, user: userID })
    .then((res) => {
      toast.success(res.data.msg);
      settext("");
      getAllTodo(setTodos);
    })
    .catch((err) => console.log(err));
};

const deleteTodo = (_id, setTodos) => {
  axios.post(`${baseUrl}/todo/delete`, { _id }).then((res) => {
    toast.success(res.data.msg);
    getAllTodo(setTodos);
  });
};

const signup = async (formData) => {
  await axios
  .post(`${baseUrl}/regiser`, formData)
    .then((res) => {
      toast.success(res.data.msg);
    })
    .catch((err) => console.log(err));
};

const login = async (formData, navigate) => {
  await axios
    .post(`${baseUrl}/login`, formData)
    .then((res) => {
      if(res.data.msg === "user not found" || res.data.msg === "wrong password"){
        toast.error(res.data.msg);
      }else{
        toast.success(res.data.msg);
      }
    
      localStorage.setItem('userId', res.data.user._id);
      navigate('/todo')
    })
    .catch((err) => console.log(err));
};

const logout = (navigate) => {
  axios
    .post(`${baseUrl}/logout`)
    .then((res) => {
      localStorage.removeItem("userId"); 
      toast.success(res.data.msg);
      navigate("/");
    })
    .catch((err) => console.log(err));
};

export { getAllTodo, addTodo, deleteTodo, signup, login,logout };
