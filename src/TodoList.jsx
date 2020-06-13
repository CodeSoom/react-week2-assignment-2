import React from 'react';

import TodoItems from './TodoItems';

export default function TodoList({ todoList, onClickConfirm }) {
  const defaultLabel = todoList.length === 0 ? '할 일이 없어요!' : '';
  return (
    <div>
      <p>
        {defaultLabel}
      </p>
      <TodoItems
        todoList={todoList}
        onClickConfirm={onClickConfirm}
      />
    </div>
  );
}
