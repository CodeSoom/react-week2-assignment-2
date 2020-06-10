import React from 'react';
import TodoListItem from './TodoListItem';

export default function TodoList() {
  return (
    <ol>
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </ol>
  );
}
