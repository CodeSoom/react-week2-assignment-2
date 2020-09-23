import React, { useState } from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

function Todo() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1>To-do</h1>
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default Todo;
