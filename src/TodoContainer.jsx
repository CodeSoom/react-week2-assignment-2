import React, { useState } from 'react';
import * as R from 'ramda';

import TodoPresentational from './TodoPresentational ';

export default function TodoContainer() {
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

  function handleAddTask() {
    const newId = R.last(R.map(R.prop('id'), tasks)) + 1 || 0;

    setState({
      userInput: '',
      tasks: [...tasks, { id: newId, content: userInput }],
    });
  }

  return (
    <TodoPresentational
      userInput={userInput}
      tasks={tasks}
      handleChangeInput={(e) => handleChangeInput(e.target.value)}
      handleAddTask={handleAddTask}
      handleDeleteTask={handleDeleteTask}
    />
  );
}
