import React, { useState } from 'react';
import Button from './Button';

function Input({ addTodoItem }) {
  const [value, setValue] = useState('');

  function onClickAddButton() {
    addTodoItem(value);
    setValue('');
  }

  function onInputChange(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <input type="text" placeholder="할 일을 입력해 주세요" value={value} onChange={(e) => onInputChange(e)} />
      <Button onClick={onClickAddButton}>
        추가
      </Button>
    </div>
  );
}

export default Input;
