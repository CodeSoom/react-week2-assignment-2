import React from 'react';

import InsertForm from './InsertForm';
import TodoList from './TodoList';

export default function Page({
  todoItems, onChangeWriteTodo, onClickAddTodo, onClickConfirm,
}) {
  return (
    <div>
      <p>
        To-do
      </p>
      <InsertForm
        todoItems={todoItems}
        onChangeWriteTodo={onChangeWriteTodo}
        onClickAddTodo={onClickAddTodo}
      />
      <TodoList
        todoList={todoItems.todoList}
        onClickConfirm={onClickConfirm}
      />
    </div>
  );
}
