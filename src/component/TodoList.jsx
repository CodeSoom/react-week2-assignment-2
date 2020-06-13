import React from 'react';

import SingleTodo from './SingleTodo';

export default function TodoList({ todos, handleTodoDone }) {
  const checkEmpty = (todos.length === 0);
  const emptyCase = '할 일이 없어요!';
  const todoCase = (todos.map((todo) => (
    <SingleTodo
      key={todo.id}
      todo={todo}
      handleTodoDone={handleTodoDone}
    />
  )));

  return (
    <ol>
      {(checkEmpty ? emptyCase : todoCase)}
    </ol>
  );
}
