import React from 'react';

function ToDoList({ text, list, setToDo }) {
  function deleteItem(e) {
    list.splice(list.indexOf(e.target.name), 1);
    setToDo({
      text,
      list,
    });
  }

  const listItems = list.map(
    (todo) => (
      <li key={todo}>
        {todo}
        <button type="button" name={todo} onClick={deleteItem}>삭제</button>
      </li>
    ),
  );

  return (list.length ? (<ol>{listItems}</ol>) : (<p>할 일이 없어요!</p>));
}
export default ToDoList;
