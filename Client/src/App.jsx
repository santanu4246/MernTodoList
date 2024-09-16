import { useEffect, useState } from "react";

import UserForm from "./components/UserForm";
import Todo from "./components/Todo";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
 
    <Routes>
      <Route path="/" element={<UserForm />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
    </>
    
  );
}

export default App;
