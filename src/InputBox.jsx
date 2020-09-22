import React, { useState } from 'react';
import Button from './Button';

function InputBox({ AddInputValue }) {
  const [value, setValue] = useState('');

  function onClickAddButton() {
    AddInputValue(value);
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

export default InputBox;
