import React from 'react';

import CommonButton from './CommonButton';

export default function Form({ handleClick, handleChange, todoItemInput }) {
  return (
    <form>
      <label htmlFor="todoInput" style={{ fontSize: 0, width: '1px', height: '1px', margin: '-1px' }}>
        오늘 할 일 입력
      </label>
      <input id="todoInput" type="text" onChange={handleChange} value={todoItemInput} />
      <CommonButton handleClick={handleClick} disabled={!todoItemInput.trim()}>
        추가
      </CommonButton>
    </form>
  );
}
