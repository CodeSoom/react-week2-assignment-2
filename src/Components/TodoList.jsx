import React from 'react';

import TodoItem from './TodoItem';

function TodoList({ todos, onClickDone }) {
  if (todos.length === 0) {
    return <div>할 일이 없어요!</div>;
  }

  return (
    <ol>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          content={todo.content}
          onClick={() => onClickDone(todo.id)}
        />
      ))}
    </ol>
  );
}

export default TodoList;
