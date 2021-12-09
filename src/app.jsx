import React, { useState } from 'react';

import TodoForm from './todoForm';
import TodoList from './todoList';

export default function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  function handleChange(value) {
    setTodo(value);
  function handleClickAdd(todoItem) {
    setTodos([...todos, todoItem]);
  }

  function handleClickDone(todoItem) {
    setTodos(todos.filter((todo) => todo !== todoItem));
  }

  return (
    <>
      <h1>To-do</h1>
      <TodoForm
        todo={todo}
        onChange={handleChange}
        handleClickAdd={handleClickAdd}
      />
      <TodoList
        todos={todos}
        handleClickDone={handleClickDone}
      />
    </>
  );
}
