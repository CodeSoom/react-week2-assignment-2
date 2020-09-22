import React, { useState } from 'react';
import Button from './Button';

function Form() {
  const [value, setValue] = useState('');

  function onFormSubmit(event) {
    event.preventDefault();
    setValue('');
  }

  function onInputChange(event) {
    setValue(event.target.value);
  }

  return (
    <form onSubmit={(e) => onFormSubmit(e)}>
      <input type="text" placeholder="할 일을 입력해 주세요" value={value} onChange={(e) => onInputChange(e)} />
      <Button type="submit">
        추가
      </Button>
    </form>
  );
}

export default Form;
