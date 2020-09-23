import React from 'react';

import Form from './Form';
import TodoList from './TodoList';

export default function UpdatableTodoList({
  newTask,
  tasks,
  addTask,
  changeNewTask,
  deleteTask,
}) {
  const isTodoListNotEmpty = tasks && tasks.length;

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask();
  };

  const handleInputChange = (e) => {
    changeNewTask(e.target.value);
  };

  return (
    <div>
      <h1>To-do</h1>
      <Form newTask={newTask} onSubmit={handleSubmit} onChange={handleInputChange} />
      {isTodoListNotEmpty
        ? <TodoList tasks={tasks} onClick={deleteTask} />
        : <p>할 일이 없어요!</p>}
    </div>
  );
}
