import React from 'react';

export default function AddTodo({ value, onChange, onClick }) {
  return (
    <>
      <input
        value={value}
        placeholder="할 일을 입력해 주세요"
        onChange={onChange}
      />
      <button type="button" onClick={onClick}>
        추가
      </button>
    </>
  );
}
