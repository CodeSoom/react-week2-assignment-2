import React, { useState } from 'react';
import * as R from 'ramda';

import List from './List';
import Input from './Input';

export default function Todo() {
  const [userInput, setUserInput] = useState('');
  const [tasks, setTasks] = useState([]);

  function handleChangeInput(e) {
    setUserInput(e.target.value);
  }

  function handleDeleteTask(target) {
    const isTaskToRemain = R.pipe(R.prop('id'), R.equals(target), R.not);
    setTasks((oldTasks) => (R.filter(isTaskToRemain, oldTasks)));
  }

  function handleAddTask() {
    const newId = R.last(R.map(R.prop('id'), tasks)) + 1 || 0;

    setTasks((oldTasks) => (
      [...oldTasks, { id: newId, content: userInput }]
    ));
    document.getElementById('inputBox').value = '';
  }

  return (
    <p>
      <h1>To-do</h1>
      <Input onChangeInput={handleChangeInput} onSubmit={handleAddTask} />
      <List items={tasks} onClick={handleDeleteTask} />
    </p>
  );
}
