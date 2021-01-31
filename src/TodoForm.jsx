import React from 'react';

export default function TodoForm({ userText, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력해주세요."
        value={userText}
        onChange={onChange}
      />
      <button type="submit">추가</button>
    </form>
  );
}
