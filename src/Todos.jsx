import React from 'react';
import Todo from './Todo';

export default function Todos({ todos, onClick }) {
  return (
    <ol>
      {
        todos.map((todo) => (
          <Todo
            key={todo.id}
            content={todo.content}
            onClick={() => onClick(todo.id)}
          />
        ))
      }
    </ol>
  );
}
