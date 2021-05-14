import React from 'react';

import Todo from "./Todo";

export default function TodoList({ todoList, onClickRemoveTodo }) {
  if (todoList.length === 0) {
    return <p>할 일이 없어요!</p>;
  }

  return (
    <div>
      <ol>
        {todoList.map((todo, index) => (
          <Todo
            key={`${todo}_${index}`}
            todo={todo}
            onClickRemoveTodo={onClickRemoveTodo}
          />
        ))}
      </ol>
    </div>
  );
}
