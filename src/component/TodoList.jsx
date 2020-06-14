import React from 'react';

import Todo from './Todo';

export default function TodoList({ todos, onTodoDone }) {
  const isEmpty = (array) => array.length === 0;

  if (isEmpty(todos)) return '할 일이 없어요!';

  return (
    <ol>
      {(todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onTodoDone={onTodoDone}
        />
      )))}
    </ol>
  );
}
