import React from 'react';

import TodoListItem from './TodoListItem';

export default function TodoList({ todos, onClick }) {
  return (
    todos.map(({ id, name }, index) => (
      <TodoListItem
        key={id}
        index={index}
        name={name}
        onClick={() => onClick(id)}
      />
    ))
  );
}
