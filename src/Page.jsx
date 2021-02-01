import React from 'react';

import Title from './Title';
import Input from './Input';
import TodoList from './TodoList';

export default function Page({
  value, handleChange, handleSubmit,
  todoList, handleClickDone,
}) {
  return (
    <div>
      <Title />
      <Input value={value} onChange={handleChange} onSubmit={handleSubmit} />
      <TodoList values={[...todoList]} onClick={handleClickDone} />
    </div>
  );
}
