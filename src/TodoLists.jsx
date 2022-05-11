import React from 'react';

import TodoList from './TodoList';

export default function TodoLists({ todos, onClick }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoList
          key={todo.id}
          todo={todo}
          order={index + 1}
          onClick={onClick}
        />
      ))}
    </div>
  );
}
