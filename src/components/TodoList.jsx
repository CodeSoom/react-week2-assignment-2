import React from 'react';

import TodoItems from './TodoItems';

function TodoList({ items, onClick }) {
  const isEmpty = items.length === 0;

  if (isEmpty) {
    return <p>할 일이 없어요!</p>;
  }

  return (
    <>
      <TodoItems
        items={items}
        onClick={onClick}
      />
    </>
  );
}

export default TodoList;
