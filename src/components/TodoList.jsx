import React from 'react';

export default function TodoList({ todoList = [1, 2, 3] }) {
  return (
    <ul>
      {todoList.map((todo) => (<li key={todo}>{todo}</li>))}
    </ul>
  );
}
