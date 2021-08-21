import React, { useState} from 'react';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    newId: 100,
    tasks: [
      { id: 1, title: '커피 마시기' },
      { id: 2, title: '밥 먹기' },
    ],
  });

  const { newId, tasks } = state;

  function handleClick() {
    setState({
      newId: newId + 1,
      tasks: [...tasks, { id: newId, title: 'new task'}],
    })
  }
  
  return (
    <Page
      tasks={tasks} 
      onClick={handleClick}
    />
  );
}
