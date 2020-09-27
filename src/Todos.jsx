import React from 'react';

import Todo from './Todo';

export default function Todos({ todos, onClick }) {
  if (todos.length === 0) {
    return <p>할 일이 없어요!</p>;
  }

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
