import React from 'react';

import Button from './Button';

export default function TodoAdd({ onAddTodo, todoValue, onChangeTodo }) {
  return (
    <>
      <input
        type="text"
        name="todo-add"
        placeholder="할 일을 입력하세요."
        value={todoValue}
        onChange={onChangeTodo}
      />
      <Button onClick={onAddTodo}>추가</Button>
    </>
  );
}
