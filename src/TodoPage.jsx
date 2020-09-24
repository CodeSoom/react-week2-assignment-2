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
  const isTodoListNotEmpty = todos && todos.length;

  return (
    <div>
      <h1>To-do</h1>
      <TodoAddForm newTodo={newTodo} onSubmit={onTodosAdd} onChange={onNewTodoChange} />
      {isTodoListNotEmpty
        ? <TodoList todos={todos} onClick={onTodosDelete} />
        : <p>할 일이 없어요!</p>}
    </div>
  );
}
