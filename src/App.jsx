import React from 'react';
import Input from './Input';

export default function App() {
  function onClick() {
    // TODO : 할 일 추가
  }
  
  return (
    <div>
      <h1>To-do</h1>
      <Input onClick={onClick}/>
    </div>
  );
}
