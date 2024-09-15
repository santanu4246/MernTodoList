import { useEffect, useState } from 'react';

import UserForm from './components/UserForm';
import Todo from './components/Todo';
import {Routes,Route} from 'react-router-dom';
function App() {
  const [login, setLogin] = useState(false);
  
  // <Routes>
  //   <Route path="/login" element={<UserForm />} />
  //   <Route path="/todo" element={<Todo />} />
  // </Routes>
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      {!login ? (
        <UserForm  /> 
      ) : (
        <Todo/>
       )} 
    </div>
  );
}

export default App;
