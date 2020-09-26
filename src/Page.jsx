import React from 'react';

import TodoForm from './TodoForm';
import Tasks from './Tasks';

const Page = ({
  text, onChangeText, tasks, onClickAddTask, onClickDeleteTask,
}) => (
  <div>
    <h2>To-do</h2>
    <TodoForm
      text={text}
      onChangeText={onChangeText}
      onClickAddTask={onClickAddTask}
    />
    <Tasks
      tasks={tasks}
      onClickDeleteTask={onClickDeleteTask}
    />
  </div>
);

export default Page;
