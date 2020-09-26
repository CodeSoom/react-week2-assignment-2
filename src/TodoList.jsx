import React from 'react';

import TodoListItem from './TodoListItem';

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
              <TodoListItem
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
