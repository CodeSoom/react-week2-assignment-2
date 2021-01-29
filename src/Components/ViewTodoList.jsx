import React from 'react';

import Todo from './Todo';

function ViewTodoList({ todos, deleteButton }) {
  const todoList = todos.map(
    (item) => <Todo key={item} value={item} deleteButton={deleteButton} />,
  );

  return (todos.length ? (<ol>{todoList}</ol>) : (<p>할 일이 없어요!</p>));
}
export default ViewTodoList;
