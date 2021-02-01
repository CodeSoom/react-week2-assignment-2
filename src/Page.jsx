import React from 'react';

import Input from './Input';
import List from './List';

function Page({
  taskTitle, onChangeTitle, onClickAddTask,
  tasks, onClickDeleteTask,
}) {
  return (
    <div>
      <h1>TO-DO</h1>
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

export default Page;
