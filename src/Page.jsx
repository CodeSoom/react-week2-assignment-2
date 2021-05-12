import React from 'react';

import Input from './Input';
import TodoList from './TodoList';


function Page({ description, todoList, onAdd, onChange, onDelete }) {
  return (
    <div>
      <h1>To-do</h1>
      <Input
        description={description}
        onAdd={onAdd}
        onChange={onChange} />
      {
        todoList.length === 0
        ? <p>할 일이 없어요!</p>
        : <TodoList
        todoList={todoList}
        onDelete={onDelete} />
      }
    </div>
  );
}

export default Page;
