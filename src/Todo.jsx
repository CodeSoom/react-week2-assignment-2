import React, { useState } from 'react';
import * as R from 'ramda';

import List from './List';
import Input from './Input';

export default function Todo() {
  const [userInput, setUserInput] = useState('');
  const [tasks, setTasks] = useState([]);

  function updatInputText(e) {
    setUserInput(e.target.value);
  }

  function deleteTask(target) {
    const isTaskToRemain = R.pipe(R.prop('id'), R.equals(target), R.not);
    setTasks((oldTasks) => (R.filter(isTaskToRemain, oldTasks)));
  }

  function addTask() {
    const newId = R.last(R.map(R.prop('id'), tasks)) + 1 || 0;
    const newContent = userInput;

    setTasks((oldTasks) => (
      [...oldTasks, { id: newId, content: newContent }]
    ));
    document.getElementById('inputBox').value = '';
  }

  return (
    <p>
      <h1>To-do</h1>
      <Input updater={updatInputText} submitter={addTask} />
      <List items={tasks} onClick={deleteTask} />
    </p>
  );
}
