import React from 'react';

import TodoList from './TodoList';

function TodoLists({ todos, onClick }) {
  return (
    <div>
      {
        todos.map((todo, index) => (
          <TodoList
            key={todo.id}
            todo={todo}
            order={index + 1}
            onClick={onClick}
          />
        ))
      }
    </div>
  );
}

export default TodoLists;
