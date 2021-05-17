import React from 'react';

export default function TodoInput({
  todoInput,
  onChangeTodoInput,
  handleClick,
}) {
  function handleKeyPressInput(event) {
    if (event.key === 'Enter') { handleClick(event); }
  }

  function handleChangeInput(event) {
    onChangeTodoInput(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={todoInput}
        onChange={handleChangeInput}
        onKeyPress={handleKeyPressInput}
      />
      <button type="button" onClick={handleClick}>
        추가
      </button>
    </div>
  );
}
