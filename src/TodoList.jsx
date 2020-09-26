import React from 'react';

import TodoItem from './TodoItem';

function TodoList({ todoItems, onDoneClick }) {
  return (
    <ol>
      {todoItems.length === 0
        ? <p>할 일이 없어요!</p>
        : (todoItems.map((item) => (
          <TodoItem
            item={item}
            onDoneClick={onDoneClick}
            key={item.id}
          />
        )))}
    </ol>
  );
}
export default TodoList;
