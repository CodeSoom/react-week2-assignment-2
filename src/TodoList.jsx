import React from 'react';

import Todo from './Todo';

function TodoList({ todoList, onClickDelete }) {
  if (todoList.length === 0) {
    return (
      <>
        <p>할 일이 없어요!</p>
      </>
    );
  }

  return (
    <>
      <ol>
        {todoList.map((todo) => (
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

export default TodoList;
