import React from 'react';

function TodoAddButton({ handleClickAdd }) {
  return (
    <button type="button" onClick={() => handleClickAdd()}>추가</button>
  );
}

export default TodoAddButton;
