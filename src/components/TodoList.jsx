import React from 'react';

import Todo from './Todo';

export default function ({
  todos, onCompleteTodo,
}) {
  return (
    <div>
      {todos.length ? todos.map((todo, index) => (
        <Todo
          key={todo.id}
          index={index}
          todo={todo}
          onCompleteTodo={() => onCompleteTodo(todo.id)}
        />
      )) : <span>할 일이 없어요!</span>}
    </div>
  );
}
