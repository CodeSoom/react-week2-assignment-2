import React from 'react';

function TodoInput({ todoInput, onChangeContent, onClickAdd }) {
  return (
    <>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        value={todoInput}
        onChange={onChangeContent}
      />
      <button type="button" onClick={onClickAdd}>추가</button>
    </>
  );
}

export default TodoInput;
