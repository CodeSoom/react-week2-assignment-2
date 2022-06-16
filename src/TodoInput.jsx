import React from 'react';

function TodoInput({ inputRef, onAddTodoItem }) {
  return (
    <p>
      <input ref={inputRef} placeholder="할 일을 입력해 주세요" />
      <button type="button" onClick={() => onAddTodoItem()}>
        추가
      </button>
    </p>
  );
}

export default TodoInput;
