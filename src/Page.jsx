import React from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Page = ({
  todoText, updateTodoText, todoList, addTodo, deleteTodo,
}) => (
  <div>
    <h2>To-do</h2>
    <TodoInput
      todoText={todoText}
      updateTodoText={updateTodoText}
      addTodo={addTodo}
    />
    <TodoList
      todoList={todoList}
      deleteTodo={deleteTodo}
    />
  </div>
);

export default Page;
