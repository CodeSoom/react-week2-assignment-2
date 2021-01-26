import React from 'react';

import TodoItem from './TodoItem';

export default function TodoList({ todos, onClick }) {
  if (todos.length === 0) {
    return (
      <p>할 일이 없어요!</p>
    );
  }

  return (
    <ol>
      {todos
        .filter((todo) => !todo.done)
        .map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            onClick={onClick}
          />
        ))}
    </ol>
  );
}
