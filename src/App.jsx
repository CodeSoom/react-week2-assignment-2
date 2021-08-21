import React from 'react';
import Input from './Input';
import List from './List';

export default function App() {

  const tasks = [
    { id: 1, title: '커피 마시기' },
    { id: 2, title: '밥 먹기' },
  ];

  function onClick() {
    // TODO : 할 일 추가
  }
  
  return (
    <div>
      <h1>To-do</h1>
      <Input onClick={onClick}/>
      <List tasks={tasks} />
    </div>
  );
}
