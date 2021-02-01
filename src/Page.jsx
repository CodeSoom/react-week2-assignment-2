import React from 'react';

import Title from './Title';
import Form from './Form';
import TodoList from './TodoList';

export default function Page({
  handleChange, handleSubmit, todoList, handleClickDone,
}) {
  return (
    <div>
      <Title />
      <Form onChange={handleChange} onSubmit={handleSubmit} />
      <TodoList values={[...todoList]} onClick={handleClickDone} />
    </div>
  );
}
