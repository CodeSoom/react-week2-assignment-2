import React, { useEffect, useState } from 'react';

import AddInput from './AddInput';

function TodoForm({ handleAddTodo, templete }) {
  const [value, setValue] = useState('');

  function handleInput(event) {
    setValue(event.target.value);
  }

  function clearInput() {
    setValue('');
  }

  function onSubmit(event) {
    event.preventDefault();

    handleAddTodo(value);

    clearInput();
  }

  useEffect(() => {
    setValue(templete || '');
  }, [templete]);

  return (
    <form onSubmit={onSubmit}>
      <AddInput value={templete || value} handleInput={handleInput} />
    </form>
  );
}

export default TodoForm;
