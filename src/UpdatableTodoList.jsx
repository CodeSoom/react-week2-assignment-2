import React from 'react';

import Form from './Form';
import TodoList from './TodoList';

export default function UpdatableTodoList({
  task,
  tasks,
  onChange,
  onSubmit,
}) {
  const isListEmpty = tasks.length === 0;

  return (
    <div>
      <h1>To-do</h1>
      <Form task={task} onSubmit={onSubmit} onChange={onChange} />
      {isListEmpty
        ? <p>할 일이 없어요</p>
        : <TodoList tasks={tasks} />}
    </div>
  );
}
