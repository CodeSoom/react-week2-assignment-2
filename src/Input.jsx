import React from 'react';

function Input({ todo, onChange }) {
  return (
    <input
      type="text"
      name="todo"
      value={todo}
      placeholder="할 일을 입력해 주세요"
      onChange={onChange}
    />
  )
}

export default Input;