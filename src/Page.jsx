import React from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import List from './List';

export default function Page({
  taskTitle, onChangeTitle, inputButtonClick,
  tasks, onClickDeleteTask,
}) {
  Page.propTypes = {
    taskTitle: PropTypes.string.isRequired,
    tasks: PropTypes.string.isRequired,
    inputButtonClick: PropTypes.string.isRequired,
    onChangeTitle: PropTypes.string.isRequired,
    onClickDeleteTask: PropTypes.string.isRequired,
  };

  return (
    <div>
      <h1>To-do</h1>
      <Input
        value={taskTitle}
        onChange={onChangeTitle}
        inputButtonClick={inputButtonClick}
      />
      <List
        tasks={tasks}
        onClickDeleteTask={onClickDeleteTask}
      />
    </div>
  );
}
