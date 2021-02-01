import React from 'react';

import Input from './Input';
import List from './List';

export default function Page({
  taskTitle, onChangeTitle, tasks, onClickAddTask, onClickDeleteTask,
}) {
  const isEmptyList = !tasks.length;

  return (
    <div>
      <h1>To-do</h1>
      <Input
        value={taskTitle}
        onChange={onChangeTitle}
        onClick={onClickAddTask}
      />
      <List
        isEmptyList={isEmptyList}
        tasks={tasks}
        onClickDeleteTask={onClickDeleteTask}
      />
    </div>
  );
}
