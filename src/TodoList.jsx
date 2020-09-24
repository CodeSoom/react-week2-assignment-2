import React from 'react';

import TodoListItem from './TodoListItem';

export default function TodoList({ todos, onClick }) {
  if (!todos.length) {
    return <p>할 일이 없어요!</p>;
  }

  return (
    todos.map(({ id, title }, index) => (
      <TodoListItem
        key={id}
        index={index}
        title={title}
        onClick={() => onClick(id)}
      />
    ))
  );
}
