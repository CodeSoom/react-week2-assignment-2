import React from 'react';

import TodoItem from './TodoItem';

function TodoItems({ items, onClick }) {
  return (
    <ol>
      {items.map((item) => (
        <TodoItem
          key={item}
          value={item}
          onClick={() => onClick(item)}
        />
      ))}
    </ol>
  );
}

export default TodoItems;
