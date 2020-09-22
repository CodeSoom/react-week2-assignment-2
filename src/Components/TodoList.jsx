import React from 'react';

import TodoItem from './TodoItem';

function TodoList({ todos, setTodos }) {
  if (todos.length === 0) {
    return <div>할 일이 없어요!</div>;
  }

  const handleClickDone = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <ol>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          content={todo.content}
          onClick={() => handleClickDone(todo.id)}
        />
      ))}
    </ol>
  );
}

export default TodoList;
