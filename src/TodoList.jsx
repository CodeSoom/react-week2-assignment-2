import React from 'react';

import TodoItem from './TodoItem';

const isEmpty = (array) => array.length === 0;

export default function TodoList({ todos, onClick }) {
  if (isEmpty(todos)) {
    return <p>할 일이 없어요!</p>;
  }

  return (
    <ol>
      {todos.map(({ id, title }) => (
        <TodoItem
          key={id}
          title={title}
          onClick={() => onClick(id)}
        />
      ))}
    </ol>
  );
}
