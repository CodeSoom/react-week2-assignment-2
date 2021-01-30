import React from 'react';

import TodoItem from './TodoItem';

export default function TodoList({ todoItems, handleClickDelete }) {
  if (todoItems.length === 0) {
    return (
      <p>할 일이 없어요!</p>
    );
  }

  return (
    <ol>
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          todoItem={item}
          handleClickDelete={handleClickDelete}
        />
      ))}
    </ol>
  );
}
