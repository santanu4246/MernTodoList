import axios from "axios"

const baseUrl = "http://localhost:5000"

const getAllTodo = (setTodos) =>{
    axios.get(baseUrl).then(({data})=>{
        console.log(data);
        setTodos(data)
    })
}

const addTodo = (text,settext,setTodos)=>{
    axios.post(`${baseUrl}/save`,{text})
    .then((data)=>{console.log(data);
    settext("")
    getAllTodo(setTodos)
    }
    ).catch((err)=> console.log(err)
    )
}

const deleteTodo = (_id,setTodos)=>{
    axios.post(`${baseUrl}/delete`,{_id})
    .then(()=>{
        getAllTodo(setTodos)
    })
}
export {getAllTodo,addTodo,deleteTodo}