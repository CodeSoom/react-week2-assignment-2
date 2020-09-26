import React from 'react';

function TodoInput({ todoInput, onChangeContent, onClickAdd }) {
  const isBlank = (string) => string.trim().length === 0;

  return (
    <>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        value={todoInput}
        onChange={onChangeContent}
      />
      <button
        type="button"
        disabled={isBlank(todoInput)}
        onClick={onClickAdd}
      >
        추가
      </button>
    </>
  );
}

export default TodoInput;
