import React from 'react';

import DeleteTodo from './DeleteTodo';

function ViewTodoList({ todoList, deleteButton }) {
  const listItems = todoList.map(
    (todo) => <DeleteTodo key={todo} todo={todo} deleteButton={deleteButton} />,
  );

  return (todoList.length ? (<ol>{listItems}</ol>) : (<p>할 일이 없어요!</p>));
}
export default ViewTodoList;
