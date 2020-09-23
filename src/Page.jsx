import React from 'react';

import TodoForm from './TodoForm';
import TodoArray from './TodoArray';

const Page = ({
  todoText, updateTodoText, todoArray, addTodo, deleteTodo,
}) => (
  <div>
    <h2>To-do</h2>
    <TodoForm
      todoText={todoText}
      updateTodoText={updateTodoText}
      addTodo={addTodo}
    />
    <TodoArray
      todoArray={todoArray}
      deleteTodo={deleteTodo}
    />
  </div>
);

export default Page;
