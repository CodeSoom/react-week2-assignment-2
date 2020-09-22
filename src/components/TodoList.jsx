import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onRemove }) {
  return (
    <div>
      {todos.map((value, index) => (
        <TodoItem
          key={value.id}
          todo={value.item}
          count={index}
          onRemove={() => onRemove(value.id)}
        />
      ))}
    </div>
  );
}

export default TodoList;
