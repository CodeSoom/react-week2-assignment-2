import React from 'react';

import TodoItem from './todoItem';

export default function TodoList() {
  return (
    <ol>
      {[
        { contents: '할일 1', id: 1 },
        { contents: '할일 2', id: 2 },
      ].map((todoItem) => (
        <TodoItem
          todoItem={todoItem}
          key={todoItem.id}
        />
      ))}
    </ol>
  );
}
