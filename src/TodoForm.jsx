import React, { useState } from 'react';

export default function TodoForm({ addTodo }) {
  const [input, setInput] = useState('');

  function handleChangeValue(e) {
    setInput(e.target.value);
  }

  function handleClick() {
    // ADD TODO
    addTodo(input);
    setInput('');
  }

  return (
    <>
      <input
        placeholder="할 일을 입력해 주세요"
        onChange={handleChangeValue}
        value={input}
      />
      <button
        type="button"
        onClick={() => handleClick()}
      >
        추가
      </button>
    </>
  );
}
