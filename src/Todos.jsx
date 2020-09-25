import React from 'react';

import Todo from './Todo';

function Todos({ todos, onClickDelete }) {
  const isEmpty = todos.length === 0;

  if (isEmpty) {
    return (
      <>
        <p>할 일이 없어요!</p>
      </>
    );
  }

  return (
    <>
      <ol>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            content={todo.content}
            onClickDelete={onClickDelete}
          />
        ))}
      </ol>
    </>
  );
}

export default Todos;
