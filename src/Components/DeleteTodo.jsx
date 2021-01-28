import React from 'react';

function DeleteTodo({
  todo, todoText, todoList, setTodo,
}) {
  function deleteItem(event) {
    todoList.splice(todoList.indexOf(event.target.name), 1);
    setTodo({
      todoText,
      todoList,
    });
  }

  return <button type="button" name={todo} onClick={deleteItem}>완료</button>;
}

export default DeleteTodo;
