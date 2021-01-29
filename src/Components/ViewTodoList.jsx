import React from 'react';

import Item from './Item';

function ViewTodoList({ todos, deleteButton }) {
  const listItems = todos.map(
    (todo) => <Item key={todo} value={todo} deleteButton={deleteButton} />,
  );

  return (todos.length ? (<ol>{listItems}</ol>) : (<p>할 일이 없어요!</p>));
}
export default ViewTodoList;
