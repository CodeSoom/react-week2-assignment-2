import React from 'react';

import TodoListItem from './TodoListItem';

export default function TodoList({ todos, onClick }) {
  if (!todos.length) {
    return <p>할 일이 없어요!</p>;
  }

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
