import React from 'react';

export default function TodoList({ todoList }) {
  return (
    <ul>
      {todoList.map(({ key, data }) => <li key={key}>{data}</li>)}
    </ul>
  );
}
