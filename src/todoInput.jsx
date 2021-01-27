import React from 'react';

export default function TodoInput({ value, onChange, onClick }) {
  return (
    <div>
      <input
        onChange={onChange}
        placeholder="할 일을 입력해주세요."
        value={value}
      />
      <button
        type="button"
        onClick={onClick}
      >
        추가
      </button>
    </div>
  );
}
