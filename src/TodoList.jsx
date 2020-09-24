import React from 'react';

import TodoItem from './TodoItem';

export default function TodoList({ todos, onClick }) {
  return (
    todos.map(({ id, name }, index) => (
      <TodoItem
        key={id}
        index={index}
        name={name}
        onClick={() => onClick(id)}
      />
    ))
  );
}
