import React from 'react';

import InputButton from './InputButton';

function Input({ todo, onChange, onClick }) {
  return (
    <div>
      <input
        type="text"
        name="todo"
        value={todo}
        placeholder="할 일을 입력해 주세요"
        onChange={(event) => onChange(event.target.value)}
      />
      <InputButton
        onClick={onClick}
      />
    </div>
  );
}

export default Input;
