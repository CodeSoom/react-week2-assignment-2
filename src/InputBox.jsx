import React, { useState } from 'react';

function InputBox() {
  const [state, setState] = useState({
    inputValue: '',
  });

  const { inputValue } = state;

  function onChange(e) {
    setState({
      inputValue: e.target.value,
    });
  }

  function clickAddTodo() {
    console.log(inputValue);
  }

  return (
    <p>
      <input value={inputValue} onChange={onChange} />
      <button type='button' onClick={clickAddTodo}>
        추가
      </button>
    </p>
  );
}

export default InputBox;
