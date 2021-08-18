import React from 'react';

export default function InputTodo({ state, setState }) {
  function handleInputTodo(e) {
    setState({
      ...state,
      inputText: e.target.value,
    });
  }
  return (
    <input placeholder="할 일을 입력해주세요" onChange={(e) => handleInputTodo(e)} />
  );
}
