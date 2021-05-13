import React, { useState } from 'react';
import * as R from 'ramda';

import Todo from './Todo';

export default function App() {
  const [state, setState] = useState({
    task: '',
    tasks: [],
  });

  const { task, tasks } = state;

  function handleChangeInput(newInput) {
    setState({
      ...state,
      task: newInput,
    });
  }

  function handleDeleteTask(target) {
    const isTaskToRemain = R.pipe(R.prop('id'), R.equals(target), R.not);
    setState({
      ...state,
      tasks: (R.filter(isTaskToRemain, tasks)),
    });
  }

  function lastIdOf(array) {
    return R.last(R.map(R.prop('id'), array));
  }

  function getNewId(array) {
    return R.isEmpty(array) ? 0 : lastIdOf(array) + 1;
  }

  function handleAddTask() {
    setState({
      task: '',
      tasks: [...tasks, { id: getNewId(tasks), content: task }],
    });
  }

  return (
    <Todo
      userInput={task}
      tasks={tasks}
      handleChangeInput={(e) => handleChangeInput(e.target.value)}
      handleAddTask={handleAddTask}
      handleDeleteTask={handleDeleteTask}
    />
  );
}
