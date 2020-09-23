import React from 'react';

import Form from './Form';
import TodoList from './TodoList';

export default function UpdatableTodoList({
  inputTask,
  tasks,
  onChange,
  onSubmit,
  onClick,
}) {
  const isTodoListNotEmpty = tasks && tasks.length;

  return (
    <div>
      <h1>To-do</h1>
      <Form inputTask={inputTask} onSubmit={onSubmit} onChange={onChange} />
      {isTodoListNotEmpty
        ? <TodoList tasks={tasks} onClick={onClick} />
        : <p>할 일이 없어요!</p>}
    </div>
  );
}
