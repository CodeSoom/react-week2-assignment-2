import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [input, setInput] = useState('');
  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleReset() {
    setInput('');
  }

  return (
    <>
      <input placeholder="할 일을 입력해 주세요" onChange={handleChange} value={input} />
      <button
        type="button"
        onClick={() => {
          addTodo(input);
          handleReset();
        }}
      >
        추가
      </button>
    </>
  );
}

export default TodoForm;
