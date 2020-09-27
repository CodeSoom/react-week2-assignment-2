import React from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Page({
  todoTitle,
  todoItems,
  onSubmitAddTodo,
  onChangeTodoTitle,
  onClickDeleteTodo,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <TodoForm
        todoTitle={todoTitle}
        onSubmitAddTodo={onSubmitAddTodo}
        onChangeTodoTitle={onChangeTodoTitle}
      />
      <TodoList
        todoItems={todoItems}
        onClickDeleteTodo={onClickDeleteTodo}
      />
    </div>
  );
}
export default Page;
