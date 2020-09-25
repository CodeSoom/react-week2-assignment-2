import React from 'react';

import TodoListItem from './TodoListItem';

const isEmpty = (array) => array.length === 0;

export default function TodoList({ todos, onClick }) {
  if (isEmpty(todos)) {
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
