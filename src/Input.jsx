import React from 'react';

import InputButton from './InputButton';

export default function Input({ todo, onChangeText, onClickAddTodo }) {
  return (
    <div>
      <input
        type="text"
        name="todo"
        value={todo}
        placeholder="할 일을 입력해 주세요"
        onChange={(event) => onChangeText(event.target.value)}
      />
      <InputButton
        onClick={onClickAddTodo}
      />
    </div>
  );
}
