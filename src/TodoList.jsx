import React from 'react';

import TodoItem from './TodoItem';

export default function TodoList({ todos, handleRemoveTodo }) {
  if (todos.length === 0) {
    return '할 일이 없어요!';
  }
  return (
    <ul>
      {todos.map((todo, index) => {
        const key = new Date().getTime();
        return (
          <TodoItem
            key={key}
            index={index + 1}
            todo={todo.todo}
            handleRemoveTodo={handleRemoveTodo}
          />
        );
      })}
    </ul>
  );
}