import React from 'react';

import Button from './Button';
import TodoList from './TodoList';
import Input from './Input';
import Title from './Title';

export default function Page({
  todos, value,
  onChangeValue, onClickAddTodo, onClickDeleteTodo, onClickCheckTodo,
}) {
  return (
    <div>
      <Title title="Todo App" />
      <Input
        type="text"
        value={value}
        onChangeValue={onChangeValue}
        onKeyPress={onClickAddTodo}
        todos={todos}
      />
      <Button onClick={onClickAddTodo}>추가</Button>
      <TodoList
        todos={todos}
        onClickDeleteTodo={onClickDeleteTodo}
        onClickCheckTodo={onClickCheckTodo}
      />
    </div>
  );
}
