import React from 'react';
import TodoFormView from './TodoFormView';

export default function TodoForm({
  currentTodo, onChangeTodo, onSubmit,
}) {
  const handleChangeTodo = (event) => {
    const { value } = event.target;
    onChangeTodo(value);
  };

  return (
    <TodoFormView
      currentTodo={currentTodo}
      handleChangeTodo={handleChangeTodo}
      onSubmit={onSubmit}
    />
  );
}
