import React, { useState } from 'react';
import uuid from 'react-uuid';

import ToDoWrapper from './ToDoWrapper';

function ToDo() {
  const [taskLists, setTaskList] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  function handleTaskInputChange(event) {
    setTaskInput(event.target.value);
  }

  function handleTaskFormSubmit(event) {
    event.preventDefault();
    setTaskList([...taskLists, { message: taskInput, id: uuid() }]);
    setTaskInput('');
  }

  function handleClickComplete(id) {
    setTaskList(taskLists.filter((task) => task.id !== id));
  }

  const todoState = {
    taskInput,
    taskLists,
    handleTaskInputChange,
    handleTaskFormSubmit,
    handleClickComplete,
  };

  return (
    <ToDoWrapper todoState={todoState} />
  );
}

export default ToDo;
