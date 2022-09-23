import React from 'react';

import Button from './Button';

export default function TodoItem({ todoList, onDelete }) {
  if (todoList.length === 0) {
    return (
      <p>할 일이 없어요!</p>
    );
  }

  return (
    <>
      {todoList.map((todo) => (
        <li key={todo.id}>
          { todo.content }
          {' '}
          <Button onClick={() => onDelete(todo.id)}>완료</Button>
        </li>
      ))}
    </>
  );
}
