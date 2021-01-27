import React from 'react';

import TodoItem from './todoItem';

export default function TodoList({ todoList, handleDelete }) {
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
