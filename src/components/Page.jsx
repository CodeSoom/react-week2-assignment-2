import React from 'react';

import AddButton from './AddButton';
import Todos from './Todos';

export default function Page({
  todos, onClickAddTodo, onChange, onClick, title,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        value={title}
        onChange={onChange}
      />
      <AddButton onClickAddTodo={onClickAddTodo} />
      <Todos
        todos={todos}
        onClick={onClick}
      />
    </div>
  );
}
