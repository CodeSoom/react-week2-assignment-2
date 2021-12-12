import React from 'react';
import { TodoAdder } from './adder/TodoAdder';
import { TodoList } from './list/TodoList';

export default function Page({
  title, onChange, todos, onClickAdd, onClickComplete,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <TodoAdder title={title} onChange={onChange} onClickAdd={onClickAdd} />
      <TodoList todos={todos} onClickComplete={onClickComplete} />
    </div>
  );
}
