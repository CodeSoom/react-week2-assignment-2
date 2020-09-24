import React from 'react';

import TodoItems from './TodoItems';

function TodoList({ list, onClick }) {
  const isEmpty = list.length === 0;

  if (isEmpty) {
    return <p>할 일이 없어요!</p>;
  }

  return (
    <>
      <TodoItems
        list={list}
        onClick={onClick}
      />
    </>
  );
}

export default TodoList;
