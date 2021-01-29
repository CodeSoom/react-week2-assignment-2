import React from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoTemplete from './TodoTemplete';

function Page({
  todos, templetes, templete, handleAddTodo, handleDeleteTodo, onClickTemplte,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <TodoTemplete templetes={templetes} onClickTemplte={onClickTemplte} />
      <TodoForm handleAddTodo={handleAddTodo} templete={templete} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default Page;
