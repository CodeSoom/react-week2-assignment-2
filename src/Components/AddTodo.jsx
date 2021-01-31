import React from 'react';

function AddTodo({ todoText, onTextChange, onAddTodo }) {
  return (
    <p>
      <input type="text" value={todoText} placeholder="할 일을 입력해 주세요!" onChange={onTextChange} />
      <button type="button" onClick={onAddTodo}>
        추가
      </button>
    </p>
  );
}

export default AddTodo;
