import React from 'react';

export default function TodoAddButton({ onClick }) {
  function handleClickAdd() {
    onClick();
  }

  return (
    <button type="button" onClick={handleClickAdd}>추가</button>
  );
}
