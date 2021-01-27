import React from 'react';

import TodoItem from './todoItem';

export default function TodoList({ todoList, handleDelete }) {
  return (
    <ol>
      {!!todoList.length && todoList.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          todoItem={todoItem}
          handleDelete={handleDelete}
        />
      ))}
      {!todoList.length && <p>할 일이 없어요!</p>}
    </ol>
  );
}
