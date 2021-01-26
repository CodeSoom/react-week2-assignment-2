import React, { useState } from 'react';

import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

import './Home.css';

function Home() {
  const [toDo, setTodo] = useState('');

  return (
    <div>
      <h1 className="title">To-do App</h1>
      <AddToDo onClick={setTodo} />
      <ToDoList toDo={toDo} />
    </div>
  );
}

export default Home;
