import React, { useState } from 'react';

import Page from './page';

function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState(null);

  function handleCreateClick() {
    const newTodoList = (todoList === null) ? [todo] : [...todoList.flat(), todo];
    setTodoList(newTodoList);
    setTodo('');
  }

  function handleCompleteClick(index) {
    const { length } = todoList;
    const newTodoList = [...todoList.slice(0, index), ...todoList.slice(index + 1, length)];
    setTodoList(newTodoList);
  }

  function handleTodoChange(e) {
    setTodo(e.target.value);
  }

  return (
    <Page
      todo={todo}
      todoList={todoList}
      handleTodoChange={handleTodoChange}
      handleCreateClick={handleCreateClick}
      handleCompleteClick={handleCompleteClick}
    />
  );
}
export default App;
