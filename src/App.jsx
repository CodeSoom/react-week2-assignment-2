import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [state, setState] = useState({
    value: '',
    newID: 1,
    tasks: [],
  });

  const { value, newID, tasks } = state;

  function handleChange(event) {
    setState({
      ...state,
      value: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (value === '') return;

    setState({
      newID: newID + 1,
      tasks: [...tasks, { id: newID, title: value }],
      value: '',
    });
  }

  function handleClickDone(index) {
    setState({
      ...state,
      tasks: tasks.filter((task) => task.id !== index),
    });
  }

  return (
    <Page
      value={value}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      tasks={tasks}
      handleClickDone={handleClickDone}
    />
  );
}

export default App;
