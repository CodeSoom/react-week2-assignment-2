import React, { useState } from 'react';

import Input from './Input';
import Todos from './Todos';

export default function Todo() {
  const [todos, setTodos] = useState([]);

  const lastIndexDerive = (arr) => arr[arr.length - 1];

  const handleAddTodo = (work) => {
    const idx = (lastIndexDerive(todos)?.idx ?? 0) + 1;

    setTodos(todos.concat({ idx, work }));
  };

  const handleRemoveTodo = (idx) => {
    setTodos(todos.filter((todo) => todo.idx !== idx));
  };

  return (
    <div>
      <h2>To-do</h2>
      <Input onClick={handleAddTodo} />
      <Todos onClick={handleRemoveTodo} todos={todos} />
    </div>
  );
}
