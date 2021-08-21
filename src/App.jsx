import React from 'react';

import Page from './Page';

export default function App() {
  const tasks = [
    { id: 1, title: '커피 마시기' },
    { id: 2, title: '밥 먹기' },
  ];

  function onClick() {
    // TODO : 할 일 추가
  }
  
  return (
    <Page
      tasks={tasks} 
      onClick={handleClick}
    />
  );
}
