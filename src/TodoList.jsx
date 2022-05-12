import React from 'react';

import TodoItem from './TodoItem';

const isEmpty = (arr = []) => arr.length === 0;

export default function TodoList({ todos, onClick }) {
  if (isEmpty(todos)) {
    return '할 일이 없어요!';
  }

  return (
    <ol>
      {todos.map((todo) => (<li key={todo.id}><TodoItem todo={todo} onClick={onClick} /></li>))}
    </ol>
  );
}
