import React from 'react';

import TodoForm from './TodoForm';
import TodoArray from './TodoArray';

const Page = ({
  todoText, onChangeTodoText, todoArray, onClickAddTodo, onClickDeleteTodo,
}) => (
  <div>
    <h2>To-do</h2>
    <TodoForm
      todoText={todoText}
      onChangeTodoText={onChangeTodoText}
      onClickAddTodo={onClickAddTodo}
    />
    <TodoArray
      todoArray={todoArray}
      onClickDeleteTodo={onClickDeleteTodo}
    />
  </div>
);

export default Page;
