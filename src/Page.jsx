import React from 'react';

import Title from './Title';
import Input from './Input';
import TodoList from './TodoList';

export default function Page({
  handleChange, handleSubmit, todoList, handleClickDone,
}) {
  return (
    <div>
      <Title />
      <Input onChange={handleChange} onSubmit={handleSubmit} />
      <TodoList values={[...todoList]} onClick={handleClickDone} />
    </div>
  );
}
