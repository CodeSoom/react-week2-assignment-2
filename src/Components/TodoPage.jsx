import React, { useState } from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const states = {
    todos, setTodos, todoInput, setTodoInput,
  };

  return (
    <div>
      <h1>To-do</h1>
      <TodoInput states={states} />
      <TodoList states={states} />
    </div>
  );
}

export default TodoPage;
