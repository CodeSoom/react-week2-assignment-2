import React, { useState } from 'react';
import uuid from 'react-uuid';

import ToDoWrapper from './ToDoWrapper';

function ToDo() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  function updateValue(event) {
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setList([...list, { message: input, id: uuid() }]);
    setInput('');
  }

  function detachTask(id) {
    setList(list.filter((task) => task.id !== id));
  }

  const state = {
    input,
    list,
    updateValue,
    handleSubmit,
    detachTask,
  };

  return (
    <ToDoWrapper state={state} />
  );
}

export default ToDo;
