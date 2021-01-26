import React, { useState } from 'react';

import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

import './Home.css';

function Home() {
  const [toDo, setToDo] = useState({
    text: '',
    list: [],
  });

  const { text, list } = toDo;

  return (
    <div>
      <h1 className="title">To-do App</h1>
      <AddToDo text={text} list={list} setToDo={setToDo} />
      <ToDoList list={list} setToDo={setToDo} />
    </div>
  );
}

export default Home;
