import React, { useState } from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function App() {
  const [todo, setTodo] = useState([]);

  function handleOnClick(newTodoContents) {
    const addTodoItem = {
      key: todo.length + 1,
      contents: newTodoContents,
    };

    setTodo([...todo, addTodoItem]);
  }

  function handleDeleteClick(todoKey) {
    const newTodo = todo.filter((todoItem) => todoItem.key !== todoKey);

    setTodo(newTodo);
  }

  return (
    <div>
      <h1>To-do</h1>
      <TodoInput onClick={handleOnClick} />
      <TodoList todoList={todo} onClick={handleDeleteClick} />
    </div>
  );
}
