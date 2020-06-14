import React from 'react';

function TodoDeleteButton({ id, onClickDelete }) {
  return (
    <button type="button" onClick={() => onClickDelete(id)}>완료</button>
  );
}

export default TodoDeleteButton;
