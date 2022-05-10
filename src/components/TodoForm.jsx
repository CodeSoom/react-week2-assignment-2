import React from 'react';

const TodoForm = ({ value, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="할 일을 입력해 주세요"
    />
    <button
      type="button"
      onClick={onSubmit}
    >
      추가
    </button>
  </form>
);

export default TodoForm;
