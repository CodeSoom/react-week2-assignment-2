import React, { useState } from 'react';

import Page from './Page.jsx';


function App() {
  const [description, setDescription] = useState('');
  const [currentId, setCurrentId] = useState(1);
  const [todoList, setTodoList] = useState([]);

  const onAdd = () => {
    const todo = { id: currentId, description };
    setCurrentId(currentId + 1);
    setTodoList([...todoList, todo]);
    setDescription('');
  }

  const onChange = (e) => {
    setDescription(e.target.value)
  }

  const onDelete = (e) => {
    const id = Number(e.target.dataset.id);
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  }

  return (
    <Page
      description={description}
      todoList={todoList}
      onAdd={onAdd}
      onChange={onChange}
      onDelete={onDelete} />
  );
}

export default App;
