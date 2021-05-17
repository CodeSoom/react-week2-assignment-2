import React from 'react';
import PropTypes from 'prop-types';

import TodoInput from './TodoInput';
import TodoList from './ToDoList';

export default function Todo({
  userInput,
  tasks,
  onChangeInput,
  onAddTask,
  onDeleteTask,
}) {
  return (
    <p>
      <h1>To-do</h1>
      <TodoInput
        value={userInput}
        onChangeInput={onChangeInput}
        onSubmit={onAddTask}
      />
      <TodoList
        items={tasks}
        onClick={onDeleteTask}
      />
    </p>
  );
}

Todo.propTypes = {
  userInput: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeInput: PropTypes.func.isRequired,
  onAddTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};
