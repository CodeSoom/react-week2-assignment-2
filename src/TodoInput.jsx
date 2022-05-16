import React from 'react';

export default function TodoInput({ todoInput, onChangeTitle, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChangeTitle} value={todoInput} />
      <button type="submit">추가</button>
    </form>
  );
}
