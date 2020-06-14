import React from 'react';

import Form from './Form';
import Todos from './Todos';

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
          : <Todos todos={todoList} onClick={onClickRemove} />
      }
    </div>
  );
}
