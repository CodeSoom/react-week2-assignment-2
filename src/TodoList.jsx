import React from 'react';

import TodoItem from './TodoItem';

function TodoList({
  todo,
  onClick,
}) {
  return (
    <>
      {todo.length === 0
        ? <p>할 일이 없어요!</p>
        : (
          <ol>
            {todo.map(({ key, value }) => (
              <TodoItem
                key={key}
                todo={value}
                onClick={() => onClick(key)}
              />
            ))}
          </ol>
        )}
    </>
  );
}

export default TodoList;
