import React from 'react';

import Form from './Form';
import List from './List';

export default function TodoPage({
  state: { inputValue, todoList }, onSubmitAddTodo, onChangeInput, onClickRemove,
}) {
  return (
    <div>
      <p>To-do</p>
      <Form value={inputValue} onSubmit={onSubmitAddTodo} onChange={onChangeInput} />
      {
        todoList.length === 0
          ? <p>할 일이 없어요!</p>
          : <List list={todoList} onClick={onClickRemove} />
      }
    </div>
  );
}
