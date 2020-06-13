import React from 'react';
import AddForm from './AddForm';
import Todos from './Todos';

export default function Page({
  todos, newTodo, handleChange, handleSubmit, handleClickComplete,
}) {
  const isNotEmpty = (arr) => arr.length !== 0;

  return (
    <div>
      <h1>To-do</h1>
      <AddForm newTodo={newTodo} onChange={handleChange} onSubmit={handleSubmit} />
      {
        isNotEmpty(todos)
          ? <Todos todos={todos} onClick={handleClickComplete} />
          : <p>할 일이 없어요!</p>
      }
    </div>
  );
}
