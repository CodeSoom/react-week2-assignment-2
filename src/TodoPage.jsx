import React from 'react';

import Form from './Form';
import List from './List';

export default function todoPage({
  state, handleSubmitAddTodo, handleChangeInput, handleClickRemoveTodo,
}) {
  const { inputValue, todoList } = state;

  return (
    <div>
      <p>To-do</p>
      <Form value={inputValue} onSubmit={handleSubmitAddTodo} onChange={handleChangeInput} />
      {
        todoList.length === 0
          ? <p>할 일이 없어요!</p>
          : <List list={todoList} onClick={handleClickRemoveTodo} />
      }
    </div>
  );
}
