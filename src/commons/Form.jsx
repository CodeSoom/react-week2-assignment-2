import React, { useState } from 'react';
import uuid from 'react-uuid';

function Form({ appendTask }) {
  const [input, setInput] = useState('');

  function updateValue(event) {
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    appendTask({ message: input, id: uuid() });
    setInput('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={input} placholder="할 일을 입력해 주세요" onChange={updateValue} />
      <button type="submit">추가</button>
    </form>
  );
}

export default Form;
