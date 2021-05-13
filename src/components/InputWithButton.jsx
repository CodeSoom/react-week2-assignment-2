import React from 'react';

export default function InputWithButton({
  inputValue,
  setInputValue,
  handleClick,
}) {
  function handleKeyPressInput(event) {
    if (event.key === 'Enter') { handleClick(event); }
  }

  function handleChangeInput(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChangeInput}
        onKeyPress={handleKeyPressInput}
      />
      <button type="button" onClick={handleClick}>
        추가
      </button>
    </div>
  );
}
