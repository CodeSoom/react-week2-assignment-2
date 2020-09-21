import React, { useState } from 'react';

import TodoInput from './TodoInput';

export default function TodoApp() {
  const initialState = {
    todoItems: [],
  };

  const [state, setState] = useState(
    initialState,
  );

  const { todoItems } = state;

  const onAddTodo = (todoItem) => {
    setState({ todoItems: [...todoItems, todoItem] });
  };

  return (
    <div>
      <h1>To-do</h1>
      <TodoInput onAddTodo={onAddTodo} />
    </div>
  );
}
