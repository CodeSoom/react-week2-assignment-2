import React from 'react';

import TodoListItem from './TodoListItem';

function TodoList({ todos, handleDeleteTodo }) {
  if (todos.length === 0) {
    return <p>할 일이 없어요!</p>;
  }

  return (
    <ol>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          handleDeleteTodo={() => handleDeleteTodo(todo.id)}
        />
      ))}
    </ol>
  );
}

export default TodoList;
