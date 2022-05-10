import React from 'react';

function TodoInput({ inputText, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={inputText.text} />
      <button type="button">추가</button>
    </form>
  );
}

export default TodoInput;
