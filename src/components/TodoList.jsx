import React from 'react';
import TodoListItem from './TodoListItem';

export default function TodoList({ todos, onRemoveTodoItem }) {
  return (
    <ol>
      {todos.map(({ id, todo }) => (
        <TodoListItem
          key={id}
          todo={todo}
          onRemoveTodoItem={() => onRemoveTodoItem(id)}
        />
      ))}
    </ol>
  );
}
