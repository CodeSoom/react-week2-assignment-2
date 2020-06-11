import React from 'react';

export default function TodoAddButton({ inputValueState, onClick, clearInput }) {
  const { inputValue } = inputValueState;

  function handleClickAdd() {
    onClick(inputValue);
    clearInput();
  }

  return (
    <button type="button" onClick={handleClickAdd}>추가</button>
  );
}
