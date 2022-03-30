import React, { useState } from 'react';

function TodoInput() {
  const [state, setState] = useState({
    inputValue: '',
  });

  const { inputValue } = state;

  function onChangeInput(e) {
    setState({
      ...inputValue,
      inputValue: e.target.value,
    });
  }

  function clickAddTodo() {
    console.log(inputValue);
  }

  return (
    <p>
      <input value={inputValue} onChange={onChangeInput} />
      <button type='submit' onClick={clickAddTodo}>
        추가
      </button>
    </p>
  );
}

export default TodoInput;
