import React from 'react';

import Button from './Button';

export default function TodoItem({ todoItems, onDelete }) {
  if (todoItems.length === 0) {
    return (
      <p>할 일이 없어요!</p>
    );
  }

  return (
    <>
      {todoItems.map((todo) => (
        <li key={todo.id}>
          { todo.content }
          {' '}
          <Button onClick={() => onDelete(todo.id)}>완료</Button>
        </li>
      ))}
    </>
  );
}
