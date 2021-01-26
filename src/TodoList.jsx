import React from 'react';

import TodoItem from './TodoItem';

export default function TodoList({ todos }) {
  return (
    <ol>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          text={todo.text}
        />
      ))}
    </ol>
  );
}
