import React from 'react';

import Todo from './Todo';

export default function Todos({ todos, onClick }) {
  return (
    <ul style={{ listStyle: 'none' }}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onClick={onClick} />
      ))}
    </ul>
  );
}
