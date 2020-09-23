import React from 'react';

function TodoInput({ todoInput, onChange, onClickAdd }) {
  return (
    <>
      <input type="text" placeholder="할 일을 입력해 주세요" value={todoInput} onChange={onChange} />
      <button type="button" onClick={onClickAdd}>추가</button>
    </>
  );
}

export default TodoInput;
