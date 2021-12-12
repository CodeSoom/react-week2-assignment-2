import React from 'react';
import { TodoAdder } from './adder/TodoAdder';
import { TodoList } from './list/TodoList';

export default function Page({
  title, onChange, todos, onClick,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <TodoAdder title={title} onChange={onChange} onClick={onClick} />
      <TodoList todos={todos} />
    </div>
  );
}
