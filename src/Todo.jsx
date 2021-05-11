import React, { useState } from 'react';
import * as R from 'ramda';

import List from './List';
import Input from './Input';

export default function Todo() {
  const [state, setState] = useState({
    userInput: '',
    tasks: [],
  });

  const { userInput, tasks } = state;

  function handleChangeInput(e) {
    setState({
      userInput: e.target.value,
      tasks,
    });
  }

  function handleDeleteTask(target) {
    const isTaskToRemain = R.pipe(R.prop('id'), R.equals(target), R.not);
    setState({
      userInput,
      tasks: (R.filter(isTaskToRemain, tasks)),
    });
  }

  function handleAddTask() {
    const newId = R.last(R.map(R.prop('id'), tasks)) + 1 || 0;

    setState({
      userInput,
      tasks: [...tasks, { id: newId, content: userInput }],
    });

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
