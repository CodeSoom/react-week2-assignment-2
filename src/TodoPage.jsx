import React from 'react';

import TodoAddForm from './TodoAddForm';
import TodoList from './TodoList';

export default function TodoPage({
  todos,
  onFormSubmit,
  onListItemClick,
  newTodo,
  onInputChange,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <TodoAddForm
        newTodo={newTodo}
        onSubmit={onFormSubmit}
        onChange={onInputChange}
      />
      <TodoList todos={todos} onClick={onListItemClick} />
    </div>
  );
}
