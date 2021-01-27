import React from 'react';

function ToDoList({ todoText, todoList, setTodo }) {
  function deleteItem(e) {
    todoList.splice(todoList.indexOf(e.target.name), 1);
    setTodo({
      todoText,
      todoList,
    });
  }

  const listItems = todoList.map(
    (todo) => (
      <li key={todo}>
        {todo}
        <button type="button" name={todo} onClick={deleteItem}>완료</button>
      </li>
    ),
  );

  return (todoList.length ? (<ol>{listItems}</ol>) : (<p>할 일이 없어요!</p>));
}
export default ToDoList;
