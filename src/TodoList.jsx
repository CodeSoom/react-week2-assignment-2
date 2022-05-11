import React from 'react';

import TodoItem from './TodoItem';

export default function TodoList({ todos, onClick }) {
  return (
    <ol>
      {todos.length ? todos.map((todo) => (<TodoItem key={todo.id} todo={todo} onClick={onClick} />)) : '할 일이 없어요!'}
    </ol>
  );
}
