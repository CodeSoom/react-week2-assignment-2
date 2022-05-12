import React from 'react';

export default function TodoItem({ todoItem, index, onTodoDone }) {
  return (
    <div>
      { todoItem }
      <button type="button" onClick={() => onTodoDone(index)}>완료</button>
    </div>
  );
}
