import React from 'react';

function DeleteTodo({
  todo, todoText, todoList, setTodo,
}) {
  function deleteItem(e) {
    todoList.splice(todoList.indexOf(e.target.name), 1);
    setTodo({
      todoText,
      todoList,
    });
  }

  return <button type="button" name={todo} onClick={deleteItem}>완료</button>;
}

export default DeleteTodo;
