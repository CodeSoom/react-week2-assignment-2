import React from 'react';

function DeleteTodo({
  todo, deleteButton,
}) {
  return <button type="button" name={todo} onClick={deleteButton}>완료</button>;
}

export default DeleteTodo;
