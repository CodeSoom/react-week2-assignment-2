import React from 'react';

import TodoItems from './TodoItems';

export default function TodoList({ todoItems, onClickConfirm }) {
  const defaultLabel = todoItems.todoList[0] === undefined ? '할 일이 없어요!' : '';
  return (
    <div>
      <p>
        {defaultLabel}
      </p>
      <TodoItems
        todoItems={todoItems}
        onClickConfirm={onClickConfirm}
      />
    </div>
  );
}
