import React from 'react';

export default function TodoForm({ value, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="할 일을 입력해 주세요"
      />
      <button
        type="submit"
      >
        추가
      </button>
    </form>
  );
}
