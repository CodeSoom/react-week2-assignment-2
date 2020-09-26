import React from 'react';

import Todo from './Todo';

export default function Todos({ todos, onClick }) {
  return (
    <ol>
      {
        todos.map(({ id, content }) => (
          <Todo
            key={id}
            content={content}
            onClick={() => onClick(id)}
          />
        ))
      }
    </ol>
  );
}
