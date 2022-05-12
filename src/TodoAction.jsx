import React from 'react';

export default function TodoAction({ todoAction, index, onTodoDone }) {
  return (
    <div>
      { todoAction }
      <button type="button" onClick={() => onTodoDone(index)}>완료</button>
    </div>
  );
}
