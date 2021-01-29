import React from 'react';

function AddTodo({ todoText, textChange, addButton }) {
  return (
    <p>
      <input type="text" value={todoText} placeholder="할 일을 입력해 주세요!" onChange={textChange} />
      <button type="button" onClick={addButton}>
        추가
      </button>
    </p>
  );
}

export default AddTodo;
