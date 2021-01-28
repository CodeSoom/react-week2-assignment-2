import React, { useState } from 'react';

import AddInput from './AddInput';

function TodoForm({ handleAddTodo }) {
  const [value, setValue] = useState('');

  function handleInput(e) {
    setValue(e.target.value);
  }

  function clearInput() {
    setValue('');
  }

  function onSubmit(e) {
    e.preventDefault();

    handleAddTodo(value);

    clearInput();
  }

  return (
    <form onSubmit={onSubmit}>
      <AddInput value={value} handleInput={handleInput} />
    </form>
  );
}

export default TodoForm;
