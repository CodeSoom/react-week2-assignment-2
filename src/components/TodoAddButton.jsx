import React from 'react';

export default function TodoAddButton({ inputValue, onClick, clearInput }) {
  function handleClickAdd() {
    onClick(inputValue);
    clearInput();
  }

  return (
    <button type="button" onClick={handleClickAdd}>추가</button>
  );
}
