import React, { useState } from 'react';
import uuid from 'react-uuid';

import Form from '../commons/Form';
import List from './List';

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

  return (
    <div>
      <h1>To-do</h1>
      <Form updateValue={updateValue} handleSubmit={handleSubmit} />
      <List list={list} onClick={detachTask} />
    </div>
  );
}

export default ToDo;
