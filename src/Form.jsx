import React, { useState } from 'react';

function Form() {
  const [value, setValue] = useState('');

  function onFormSubmit(event) {
    setValue('');
  }

  function onInputChange(event) {
    setValue(event.target.value);
  }

  return (
    <form onSubmit={(e) => onFormSubmit(e)}>
      <input type="text" placeholder="할 일을 입력해 주세요" value={value} onChange={(e) => onInputChange(e)} />
      <button type="submit">추가</button>
    </form>
  );
}

export default Form;
