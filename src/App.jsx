import React, { useState} from 'react';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    newId: 100,
    taskTitle: '',
    tasks: [
      { id: 1, title: '커피 마시기' },
      { id: 2, title: '밥 먹기' },
    ],
  });

  const { newId, tasks, taskTitle } = state; // 꺼내는 부분

  function handleChangeTitle(event) {
    setState({
      ...state,
      taskTitle: event.target.value,
    })
  }

  function handleClick() {
    setState({
      ...state,
      newId: newId + 1,
      tasks: [...tasks, { id: newId, title: 'new task'}],
    })
  }
  
  return (
    <Page
      taskTitle={taskTitle}
      onChangeTitle={handleChangeTitle}
      onClick={handleClick}
      tasks={tasks} 
    />
  );
}
