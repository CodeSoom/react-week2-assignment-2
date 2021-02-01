import React from 'react';

import List from './List';
import Input from './Input';

export default function Page({
  taskTitle, onChangeTitle, onClickAddTask,
  tasks, onClickDeleteTask,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <Input
        value={taskTitle}
        onChange={onChangeTitle}
        onClick={onClickAddTask}
      />
      <List
        tasks={tasks}
        onClickDelete={onClickDeleteTask}
      />
    </div>
  );
}
