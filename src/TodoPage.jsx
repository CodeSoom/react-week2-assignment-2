import React from 'react';

import TodoAddForm from './TodoAddForm';
import TodoList from './TodoList';

export default function TodoPage({
  todos,
  onFormSubmit,
  onListItemClick,
  todoTitle,
  onInputChange,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <TodoAddForm
        todoTitle={todoTitle}
        onSubmit={onFormSubmit}
        onChange={onInputChange}
      />
      <TodoList todos={todos} onClick={onListItemClick} />
    </div>
  );
}
