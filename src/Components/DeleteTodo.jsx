import React from 'react';

function DeleteTodo({
  value, deleteButton,
}) {
  return (
    <li>
      {value}
      <button type="button" name={value} onClick={deleteButton}>완료</button>
    </li>
  );
}

export default DeleteTodo;
