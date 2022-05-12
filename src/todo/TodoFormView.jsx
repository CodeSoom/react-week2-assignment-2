import React from 'react';

export default function TodoFormView({ currentTodo, handleChangeTodo, onSubmit }) {
  return (
    <>
      <input placeholder="할 일을 입력해 주세요" onChange={handleChangeTodo} value={currentTodo} />
      <button type="button" onClick={onSubmit}>추가</button>
    </>
  );
}
