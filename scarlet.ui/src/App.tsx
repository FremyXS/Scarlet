import React from 'react';
import TodoList from './features/todo-list/TodoList';
import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router';
import AuthLogin from './features/auth/login/AuthLogin';
import AuthRegister from './features/auth/register/AuthRegister';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='todo' element={<TodoList />}/>
          <Route path='auth' element={<AuthLogin />}/>
          <Route path='auth/register' element={<AuthRegister />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
