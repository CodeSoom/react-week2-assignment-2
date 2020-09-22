import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, handleClickFinish }) {
  return (
    <ol>
      {
        todos.map((todo, index) => (
          <TodoItem
            key={todo}
            todo={todo}
            handleClickFinish={() => handleClickFinish(index)}
          />
        ))
      }
    </ol>
  );
}

export default TodoList;
