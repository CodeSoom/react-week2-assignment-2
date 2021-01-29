import React from 'react';

import Item from './Item';

function ViewTodoList({ todoList, deleteButton }) {
  const listItems = todoList.map(
    (todo) => <Item key={todo} value={todo} deleteButton={deleteButton} />,
  );

  return (todoList.length ? (<ol>{listItems}</ol>) : (<p>할 일이 없어요!</p>));
}
export default ViewTodoList;
