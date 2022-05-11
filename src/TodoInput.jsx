import React from 'react';

function TodoInput({ todoInput, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={todoInput.text} />
      <button type="button">추가</button>
    </form>
  );
}

export default TodoInput;
