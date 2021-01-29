import React from 'react';

import Todo from './Todo';

export default function Todos({ todos, onClick }) {
  if (todos.length === 0) {
    return (<h5>할 일이 없어요!</h5>);
  }
  return (
    <ol>
      {todos.map((todo) => (
        <Todo
          key={todo.id.toString()}
          title={todo.title}
          id={todo.id}
          onClick={onClick}
        />
      ))}
    </ol>
  );
}
