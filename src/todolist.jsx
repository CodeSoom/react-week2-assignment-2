import React from 'react';

import Task from './task';

export default function TodoList({ todoList, onClickComplete }) {
  const isListEmpty = () => todoList.length === 0;

  if (isListEmpty()) return <p>할 일이 없어요!</p>;

  return (
    <ol>
      {todoList.map((element, index) => (
        <Task
          key={String(index)}
          element={element}
          onClickComplete={() => onClickComplete(index)}
        />
      ))}
    </ol>
  );
}
