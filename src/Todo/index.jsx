import React, { useState } from 'react';

import Input from './Input';
import Todos from './Todos';

export default function Todo() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (work) => {
    const { length } = todos;
    const lastIndex = length - 1;
    const idx = length === 0 ? 1 : todos[lastIndex].idx + 1;

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
