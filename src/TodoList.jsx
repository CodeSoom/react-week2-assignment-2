import React from 'react';

import TodoItem from './TodoItem';

export default function TodoList({ todoList, onClick }) {
  return (
    <ol>
      {
        todoList.length > 0
          ? todoList.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onClick={onClick} />
          ))
          : <div>할 일이 없어요!</div>
      }
    </ol>
  );
}
