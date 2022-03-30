import React, { useState } from 'react';

function TodoInput() {
  const [state, setState] = useState({
    inputValue: '',
  });

  const { inputValue } = state;

  function onChangeInput(value) {
    setState({
      ...inputValue,
      inputValue: value,
    });
  }

  function clickAddTodo() {
    console.log(inputValue);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        value={inputValue}
        onChange={(event) => onChangeInput(event.target.value)}
      />
      <button type="submit" onClick={clickAddTodo}>
        추가
      </button>
    </form>
  );
}

export default TodoInput;
