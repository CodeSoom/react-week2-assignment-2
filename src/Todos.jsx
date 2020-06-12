import React from 'react';
import Todo from './Todo';

export default function Todos({ ids, todos, onClick }) {
  return (
    <ol>
      {
        todos.map((todo, index) => (
          <Todo
            key={ids[index]}
            todo={todo}
            onClick={() => onClick(ids[index])}
          />
        ))
      }
    </ol>
  );
}
