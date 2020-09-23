import React, { useState } from 'react';

import UpdatableTodoList from './UpdatableTodoList';

export default function App() {
  const [state, setState] = useState({
    inputTask: '',
    tasks: [
    ],
  });

  const { inputTask, tasks } = state;

  const handleChange = (e) => {
    setState({
      ...state,
      inputTask: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({
      inputTask: '',
      tasks: [...tasks, {
        id: new Date(),
        name: inputTask,
      }],
    });
  };

  return (
    <UpdatableTodoList
      onChange={handleChange}
      onSubmit={handleSubmit}
      inputTask={inputTask}
      tasks={tasks}
    />
  );
}
