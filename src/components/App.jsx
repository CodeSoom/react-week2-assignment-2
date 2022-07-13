import React, { useState } from 'react';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleClickAddButton = ({ listItem }) => {
    setInputText('');
    setTodoList([...todoList, listItem]);
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleRemove = ({ finishedItem }) => {
    setTodoList(todoList.filter((item) => item !== finishedItem));
  };

  return (
    <>
      <h1>To-do</h1>
      <ToDoInput inputText={inputText} onChange={handleChange} onClick={handleClickAddButton} />
      <ToDoList todoList={todoList} onClick={handleRemove} />
    </>
  );
}

export default App;
