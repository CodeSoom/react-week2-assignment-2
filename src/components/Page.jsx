import React from 'react';
import InputContainer from './InputContainer';
import ToDoItems from './ToDoItems';

function Page({
  value, onInputChange, onClickAdd, items, onClickComplete,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <InputContainer value={value} onInputChange={onInputChange} onClickAdd={onClickAdd} />
      <ToDoItems items={items} onClickComplete={onClickComplete} />
    </div>
  );
}

export default Page;
