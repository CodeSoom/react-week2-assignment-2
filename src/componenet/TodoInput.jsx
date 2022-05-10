import React from 'react';

function TodoInput({ onSubmit, todoInput, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        text="text"
        placeholder="할 일을 입력해 주세여"
        value={todoInput}
        onChange={onChange}
      />
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoInput;
