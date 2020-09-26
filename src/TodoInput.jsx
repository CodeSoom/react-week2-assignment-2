import React from 'react';

export default function TodoInput({
  value, onChange, onClick,
}) {
  return (
    <form onSubmit={onClick}>
      <input
        type="text"
        value={value}
        placeholder="할 일을 입력해 주세요"
        onChange={onChange}
      />
      <button type="submit">추가</button>
    </form>
  );
}
