import React from 'react';

function DeleteTodo({
  todo, deleteButton,
}) {
  return (
    <li>
      {todo}
      <button type="button" name={todo} onClick={deleteButton}>완료</button>
    </li>
  );
}

export default DeleteTodo;
