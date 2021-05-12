import React from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import List from './List';

export default function Todo({
  userInput,
  tasks,
  handleChangeInput,
  handleAddTask,
  handleDeleteTask,
}) {
  return (
    <p>
      <h1>To-do</h1>
      <Input
        value={userInput}
        onChangeInput={handleChangeInput}
        onSubmit={handleAddTask}
      />
      <List
        items={tasks}
        onClick={handleDeleteTask}
      />
    </p>
  );
}

Todo.propTypes = {
  userInput: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChangeInput: PropTypes.func.isRequired,
  handleAddTask: PropTypes.func.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
};
