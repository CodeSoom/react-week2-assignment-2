import React from 'react';

import Todo from './Todo';

export default function TodoList({ todoList, onClickRemoveTodo }) {
  if (todoList.length === 0) {
    return <p>할 일이 없어요!</p>;
  }

  return (
    <div>
      <ol>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            title={todo.title}
            onClickRemoveTodo={() => onClickRemoveTodo(todo.id)}
          />
        ))}
      </ol>
    </div>
  );
}
