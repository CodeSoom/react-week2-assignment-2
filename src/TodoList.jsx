import React from 'react';

import TodoItem from './TodoItem';

export default function TodoList({ todoList, onClick }) {
  if (!todoList.length) {
    return (
      <div>할 일이 없어요!</div>
    );
  }
  return (
    <ol>
      {
        todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onClick={onClick} />
        ))
      }
    </ol>
  );
}
