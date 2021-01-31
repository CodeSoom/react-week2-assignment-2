import React from 'react';

import Todo from './Todo';

function ViewTodoList({ todos, onDeleteButton }) {
  const todoList = todos.map(
    (item) => <Todo key={item} value={item} onDeleteButton={onDeleteButton} />,
  );

  return (todos.length ? (<ol>{todoList}</ol>) : (<p>할 일이 없어요!</p>));
}
export default ViewTodoList;
