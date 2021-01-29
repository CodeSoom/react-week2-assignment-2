import React, { useState } from 'react';

import AddInput from './AddInput';

function TodoForm({ handleAddTodo }) {
  // 관심사의 분리
  // input 관련한 state와 state를 변화시키는 함수를
  // App 컴포넌트에서 관리하는게 맞는지? TodoForm 컴포넌트에서 관리하는게 맞는지?

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

  return (
    <form onSubmit={onSubmit}>
      <AddInput value={value} handleInput={handleInput} />
    </form>
  );
}

export default TodoForm;
