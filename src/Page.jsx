import React from 'react';

import Input from './Input';
import TodoList from './TodoList';

function Page({
  todo, todoList, onChange, onClick, onClickRemove,
}) {
  return (
    <div>
      <p>To-do</p>
      <Input
        todo={todo}
        onChange={onChange}
        onClick={onClick}
      />
      <TodoList
        todoList={todoList}
        onClickRemove={onClickRemove}
      />
    </div>
  );
}

export default Page;
