import React, { useState } from 'react';

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
      <input type="text" value={value} onChange={handleInput} placeholder="할 일을 입력해 주세요" />
      <button
        type="submit"
      >
        추가

      </button>
    </form>
  );
}

export default TodoForm;
