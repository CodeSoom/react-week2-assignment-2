import React from 'react';

import Form from '../commons/Form';
import List from './List';

function ToDoWrapper({
  state,
}) {
  const {
    input, list, updateValue, handleSubmit, detachTask,
  } = state;

  return (
    <div>
      <h1>To-do</h1>
      <Form value={input} updateValue={updateValue} handleSubmit={handleSubmit} />
      <List list={list} onClick={detachTask} />
    </div>
  );
}

export default ToDoWrapper;
