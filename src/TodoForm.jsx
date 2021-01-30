import React from 'react';

import Input from './Input';

export default function TodoForm({ todoTitle, onChangeTodo, onClickAddTodo }) {
  return (
    <Input
      placeholder="할 일을 입력해 주세요"
      value={todoTitle}
      onChange={onChangeTodo}
      onClick={onClickAddTodo}
    />
  );
}
