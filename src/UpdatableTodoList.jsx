import React from 'react';

import Form from './Form';
import TodoList from './TodoList';

export default function UpdatableTodoList({
  task,
  tasks,
  onChange,
  onSubmit,
}) {
  const isTodoListNotEmpty = tasks && tasks.length;

  return (
    <div>
      <h1>To-do</h1>
      <Form task={task} onSubmit={onSubmit} onChange={onChange} />
      {isTodoListNotEmpty
        ? <TodoList tasks={tasks} />
        : <p>할 일이 없어요</p>}
    </div>
  );
}
