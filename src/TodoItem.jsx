import React from 'react';

export default function TodoItem({ todo, onClick }) {
  return (
    <>
      { todo.content }
      <button type="button" onClick={() => onClick(todo)}>완료</button>
    </>
  );
}
