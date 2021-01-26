import React, { useState } from 'react';

import Input from './Input';

function Form({ appendTask }) {
  const [input, setInput] = useState();

  function updateValue(event) {
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    appendTask({ message: input });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input onChange={updateValue} />
      <button type="submit">추가</button>
    </form>
  );
}

export default Form;
