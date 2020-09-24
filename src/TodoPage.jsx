import React from 'react';

import TodoAddForm from './TodoAddForm';
import TodoList from './TodoList';

export default function TodoPage({
  todos,
  onTodosAdd,
  onTodosDelete,
  newTodo,
  onNewTodoChange,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <TodoAddForm
        newTodo={newTodo}
        onSubmit={onTodosAdd}
        onChange={onNewTodoChange}
      />
      <TodoList todos={todos} onClick={onTodosDelete} />
    </div>
  );
}
