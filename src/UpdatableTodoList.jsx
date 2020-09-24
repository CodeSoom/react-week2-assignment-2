import React from 'react';

import Form from './Form';
import TodoList from './TodoList';

export default function UpdatableTodoList({
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
      <Form newTodo={newTodo} onSubmit={onTodosAdd} onChange={onNewTodoChange} />
      {isTodoListNotEmpty
        ? <TodoList todos={todos} onClick={onTodosDelete} />
        : <p>할 일이 없어요!</p>}
    </div>
  );
}
