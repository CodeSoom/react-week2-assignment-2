import React, { useState } from 'react';
import uuid from 'react-uuid';

import ToDoWrapper from './ToDoWrapper';

function ToDo() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  function handleTaskInputChange(event) {
    setInput(event.target.value);
  }

  function handleTaskFormSubmit(event) {
    event.preventDefault();
    setList([...list, { message: input, id: uuid() }]);
    setInput('');
  }

  function handleCompleteButton(id) {
    setList(list.filter((task) => task.id !== id));
  }

  const todoState = {
    input,
    list,
    handleTaskInputChange,
    handleTaskFormSubmit,
    handleCompleteButton,
  };

  return (
    <ToDoWrapper todoState={todoState} />
  );
}

export default ToDo;
