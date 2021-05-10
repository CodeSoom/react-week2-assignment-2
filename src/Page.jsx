import React from 'react';
import Input from './Input';
import InputButton from './InputButton';
import TodoList from './TodoList';

function Page({onChange, onClick, todoList}) {
  return (
    <div>
      <p>To-do</p>
      <Input
        onChange={onChange}
      />
      <InputButton
        onClick={onClick}
      />
      <TodoList
        todoList={todoList}
      />
    </div>
  )
}

export default Page;