import React from "react";

import Todo from "./Todo";

export default function TodoList({ todos, handleDelete }) {
  const isEmpty = arr => arr.length === 0;

  if (isEmpty(todos)) {
    return <div>할 일이 없어요!</div>;
  }

  return (
    <div>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          id={todo.id}
          text={todo.content}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}
