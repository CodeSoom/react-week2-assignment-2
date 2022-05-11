import React from 'react';

export default function TodoAction({ todoAction, index, onTodoActionToDone }) {
  const handleTodoActionToDone = (event) => {
    const { value } = event.target;
    const listIndex = Number(value);
    onTodoActionToDone(listIndex);
  };

  return (
    <div>
      { todoAction }
      <button type="button" onClick={handleTodoActionToDone} value={index}>완료</button>
    </div>
  );
}
