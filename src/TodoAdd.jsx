import React from 'react';

import Button from './Button';

export default function TodoAdd({ onAdd, inputValue, changeValue }) {
  return (
    <>
      <input type="text" name="todo-add" placeholder="할 일을 입력하세요." value={inputValue} onChange={(e) => changeValue(e.target.value)} />
      <Button onClick={onAdd}>추가</Button>
    </>
  );
}
