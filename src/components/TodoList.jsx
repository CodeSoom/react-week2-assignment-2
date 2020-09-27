import React from 'react';

import TodoItem from './TodoItem';

function TodoList({ items, onClick }) {
  const isEmpty = items.length === 0;

  if (isEmpty) {
    return <p>할 일이 없어요!</p>;
  }

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

export default TodoList;
