import React from 'react';

import TodoBox from './TodoBox';

function List({ todos, onClick }) {
  return (
    <ol>
      {
        todos.map((todo) => (
          <TodoBox
            key={todo.id}
            todo={todo}
            onClick={() => onClick(todo.id)}
          />
        ))
      }
    </ol>
  );
}

export default List;
