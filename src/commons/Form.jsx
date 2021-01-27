import React, { useState } from 'react';
import uuid from 'react-uuid';

import Input from './Input';

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
      <Input value={input} onChange={updateValue} />
      <button type="submit">추가</button>
    </form>
  );
}

export default Form;
