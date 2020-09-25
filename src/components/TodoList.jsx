import React from 'react';

import TodoItem from './TodoItem';
import { isArrayEmpty } from '../common/utils';

export default function TodoList({ todoItems, onClickComplete }) {
  if (isArrayEmpty(todoItems)) {
    return (
      <div>할 일이 없어요!</div>
    );
  }

  return (
    <ol>
      {todoItems.map(({ id, todoText }) => (
        <TodoItem
          key={id}
          id={id}
          todoText={todoText}
          onClickComplete={onClickComplete}
        />
      ))}
    </ol>
  );
}
