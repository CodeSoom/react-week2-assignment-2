import React from 'react';

import EmptyPlaceHolder from './EmptyPlaceHolder';
import TodoItem from './TodoItem';

export default function TodoItemsView({ todoItems, onTodoDone }) {
  return (
    <>
      { todoItems.length === 0 && <EmptyPlaceHolder /> }
      { todoItems.length !== 0 && todoItems.map((todoItem, index) => (
        <TodoItem
          key={`${todoItem}.${String(index)}`}
          index={index}
          todoItem={todoItem}
          onTodoDone={onTodoDone}
        />
      ))}
    </>
  );
}
