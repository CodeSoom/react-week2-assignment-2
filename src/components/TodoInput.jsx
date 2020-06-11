import React from 'react';

export default function TodoInput({ handleTodoInput, handleTodoSubmit }) {
  return (
    <form onSubmit={handleTodoSubmit}>
      <input
        onChange={handleTodoInput}
        type="text"
        placeholder="할 일을 입력해주세요"
      />
      <input type="submit" value="추가" />
    </form>
  );
}
