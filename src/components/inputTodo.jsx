/* eslint-disable react/prop-types */
import React from 'react';

function InputTodo({ onClick }) {
  return (
    <p>
      <input
        type="text"
        id="input"
        name="input"
        placeholder="할 일을 입력해 주세요"
      />
      <button type="submit" onClick={onClick}>
        추가
      </button>
    </p>
  );
}

export default InputTodo;
