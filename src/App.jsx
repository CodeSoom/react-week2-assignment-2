import React, { useState } from 'react';
import * as R from 'ramda';

import Todo from './Todo';

export default function App() {
  const [state, setState] = useState({
    userInput: '',
    tasks: [],
  });

  const { userInput, tasks } = state;

  function handleChangeInput(newInput) {
    setState({
      userInput: newInput,
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

  function lastIdOf(array) {
    return R.last(R.map(R.prop('id'), array));
  }

  function getNewId(array) {
    return lastIdOf(array) + 1 || 0;
  }

  function handleAddTask() {
    const newId = getNewId(tasks);

    setState({
      userInput: '',
      tasks: [...tasks, { id: newId, content: userInput }],
    });
  }

  return (
    <Todo
      userInput={userInput}
      tasks={tasks}
      handleChangeInput={(e) => handleChangeInput(e.target.value)}
      handleAddTask={handleAddTask}
      handleDeleteTask={handleDeleteTask}
    />
  );
}
