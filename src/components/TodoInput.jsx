import React from 'react';

function TodoInput({ value, onChange, onClick }) {
  return (
    <>
      <input
        type="text"
        placeholder="할 일을 입력해주세요"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        type="button"
        onClick={onClick}
      >
        추가
      </button>
    </>
  );
}

export default TodoInput;
