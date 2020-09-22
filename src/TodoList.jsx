import React from 'react';

import TodoListItem from './TodoListItem';

function TodoList({
  todos,
  onClick,
}) {
  return (
    <>
      {todos.length
        ? (
          <ol>
            {todos.map(({ key, value }) => (
              <TodoListItem
                key={key}
                todo={value}
                onClick={() => onClick(key)}
              />
            ))}
          </ol>
        )
        : <p>할 일이 없어요!</p>}
    </>
  );
}

export default TodoList;
