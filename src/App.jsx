import React, { useState } from 'react';

import UpdatableTodoList from './UpdatableTodoList';

export default function App() {
  const [state, setState] = useState({
    task: '',
    tasks: [
      { name: '할일 1', date: '2020-09-23' },
    ],
  });

  const { task, tasks } = state;

  const handleChange = (e) => {
    setState({
      ...state,
      task: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({
      task: '',
      tasks: [...tasks, {
        name: task,
        date: new Date(),
      }],
    });
  };

  return (
    <UpdatableTodoList
      onChange={handleChange}
      onSubmit={handleSubmit}
      task={task}
      tasks={tasks}
    />
  );
}
