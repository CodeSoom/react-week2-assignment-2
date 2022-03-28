import React from 'react';

import Todo from './Todo';

export default function Todos({ todos }) {
  return (
    <ol>
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </ol>
  );
}
