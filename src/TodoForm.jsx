import React from 'react';
import { useState } from 'react/cjs/react.development';

function TodoForm({ addTodo }) {
  const initialInput = '';
  const [input, setInput] = useState(initialInput);
  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleReset() {
    console.log('here!');
    setInput(initialInput);
  }

  return (
    <>
      <input placeholder="할 일을 입력해 주세요" onChange={handleChange} />
      <button type="button" onClick={() => addTodo(input) && handleReset()}>추가</button>
    </>
  );
}

export default TodoForm;
