import React from 'react';

function TodoDeleteButton({ id, handleClickDelete }) {
  return (
    <button type="button" onClick={() => handleClickDelete(id)}>완료</button>
  );
}

export default TodoDeleteButton;
