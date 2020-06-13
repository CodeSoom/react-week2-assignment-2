import React from 'react';

import TodoItem from './TodoItem';

const ulStyle = {
  listStyleType: 'none',
  padding: '5px',
};

export default function TodoItems({ todos, onRemoveTodoItem }) {
  if (todos.length === 0) {
    return '할 일이 없어요!';
  }

  return (
    <ul style={ulStyle}>
      {todos.map((todo, index) => (
        <TodoItem index={index + 1} todo={todo} key={todo.id} onRemoveTodoItem={onRemoveTodoItem} />
      ))}
    </ul>
  );
}
