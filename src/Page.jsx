import React from 'react';
import Button from './Button';
import TodoList from './TodoList';
import Input from './Input';
import Title from './Title';

export default function Page({
  todos,
  value,
  onChangeValue,
  addTodo,
  deleteTodo,
  checkTodo,
}) {
  return (
    <div>
      <Title>Todo</Title>
      <Input
        type="text"
        onChange={onChangeValue}
        value={value}
        onKeyPress={addTodo}
        todos={todos}
      />
      <Button onClick={addTodo}>추가</Button>
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        checkTodo={checkTodo}
      />
    </div>
  );
}
