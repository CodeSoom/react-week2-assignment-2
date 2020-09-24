import React from 'react';

import TodoItem from './TodoItem';

const isEmpty = (arr) => arr.length === 0;

function TodoList({ todos, onRemove }) {
  if (isEmpty(todos)) {
    return <div>할 일이 없어요!</div>;
  }

  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo.value}
          count={index}
          onRemove={() => onRemove(todo.id)}
        />
      ))}
    </div>
  );
}

export default TodoList;
