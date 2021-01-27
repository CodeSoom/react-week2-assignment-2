import React, { useState } from 'react';

export default function TodoInput({ appendTodoList }) {
  const [state, setState] = useState({
    input: '',
  });

  const { input } = state;

  function updateInput(value) {
    setState({
      input: value,
    });
  }

  function updateTodoList(value) {
    appendTodoList(value);
    setState({
      input: '',
    });
  }

  return (
    <div>
      <input
        onChange={(e) => updateInput(e.target.value)}
        placeholder="할 일을 입력해주세요."
        value={input}
      />
      <button
        type="button"
        onClick={() => updateTodoList(input)}
      >
        추가
      </button>
    </div>
  );
}
