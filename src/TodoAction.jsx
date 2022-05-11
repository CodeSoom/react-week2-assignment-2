import React from 'react';

export default function TodoAction({ todoAction, index, handleTodoActionToDone }) {
  return (
    <div>
      { todoAction }
      <button type="button" onClick={handleTodoActionToDone} value={index}>완료</button>
    </div>
  );
}
