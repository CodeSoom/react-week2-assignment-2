import React from 'react';
import Input from './Input';
import TodoList from './TodoList';

function Page({ todo, todoList, onChange, onClick }) {
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
      />
    </div>
  )
}

export default Page;