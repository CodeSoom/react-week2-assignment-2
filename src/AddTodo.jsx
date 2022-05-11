import React from 'react';

export default function AddTodo({
  value, onChange, onClick, onKeyPress,
}) {
  return (
    <>
      <input
        value={value}
        placeholder="할 일을 입력해 주세요"
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button type="button" onClick={onClick}>
        추가
      </button>
    </>
  );
}
