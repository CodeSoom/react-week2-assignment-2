import React from 'react';

export default function TodoInput({ onSubmit, title, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        text="text"
        placeholder="할 일을 입력해 주세여"
        value={title}
        onChange={onChange}
      />
      <button type="submit">추가</button>
    </form>
  );
}
