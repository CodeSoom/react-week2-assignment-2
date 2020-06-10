import React from 'react';

export default function TodoInputBox(
  { value, onChange, onSubmit },
) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        name="todo"
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
      <button type="submit">추가</button>
    </form>
  );
}
