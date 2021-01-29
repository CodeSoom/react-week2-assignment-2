import React, { useState } from 'react';
import uuid from 'react-uuid';

import ToDoWrapper from './ToDoWrapper';

function ToDo() {
  const [taskLists, setTaskList] = useState([]);
  const [input, setInput] = useState('');

  function handleTaskInputChange(event) {
    setInput(event.target.value);
  }

  function handleTaskFormSubmit(event) {
    event.preventDefault();
    setTaskList([...taskLists, { message: input, id: uuid() }]);
    setInput('');
  }

  function handleCompleteButton(id) {
    setTaskList(taskLists.filter((task) => task.id !== id));
  }

  const todoState = {
    input,
    taskLists,
    handleTaskInputChange,
    handleTaskFormSubmit,
    handleCompleteButton,
  };

  return (
    <ToDoWrapper todoState={todoState} />
  );
}

export default ToDo;
