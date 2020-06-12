import React from 'react';

export default function TodoForm({ input, onChangeInput, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={input} onChange={onChangeInput} placeholder="할 일을 입력해주세요." />
      <button type="submit">
        추가
      </button>
    </form>
  );
}
