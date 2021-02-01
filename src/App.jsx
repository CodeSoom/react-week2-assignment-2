import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [task, setTodo] = useState({ value: '' });
  function handleChange(event) {
    setTodo({ value: event.target.value });
  }

  const [todoList, setTodoList] = useState([]);
  function handleSubmit(event) {
    event.preventDefault();
    if (task.value === '') return;

    setTodoList([...todoList, { value: task.value }]);
    setTodo({ value: '' });
    document.getElementById('todoinput').value = '';
  }

  function handleClickDone(index) {
    return setTodoList(
      [...todoList.slice(0, index), ...todoList.slice(index + 1, todoList.length)],
    );
  }

  return (
    <Page
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      todoList={todoList}
      handleClickDone={handleClickDone}
    />
  );
}

export default App;
