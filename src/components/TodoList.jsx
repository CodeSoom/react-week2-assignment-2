import React from 'react';

import TodoItem from './TodoItem';

export default function TodoList({ todoList, handleDelete }) {
  if (!todoList.length) {
    return (
      <p>할 일이 없어요!</p>
    );
  }

  return (
    <ol>
      {todoList.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          todoItem={todoItem}
          handleDelete={handleDelete}
        />
      ))}
    </ol>
  );
}
