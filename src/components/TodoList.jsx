import React from 'react';
import TodoListItem from './TodoListItem';

export default function TodoList({ todos, onClickRemoveTodo }) {
  return (
    <ol>
      {todos.map(({ id, todo }) => (
        <TodoListItem
          key={id}
          todo={todo}
          onClickRemoveTodo={() => onClickRemoveTodo(id)}
        />
      ))}
    </ol>
  );
}
