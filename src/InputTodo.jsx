import React from 'react';

export default function InputTodo({
  inputText,
  onChange,
  onClick,
}) {
  return (
    <div>
      <input
        type="text"
        value={inputText}
        placeholder="할 일을 입력해주세요"
        onChange={onChange}
      />
      <button type="button" onClick={onClick}>
        추가
      </button>
    </div>
  );
}
