import React from 'react';

import InsertTodoItem from './InsertTodoItem';
import TodoList from './TodoList';

export default function Page({
  todoItems, onChange, onClick, onClickConfirm,
}) {
  return (
    <div>
      <p>
        To-do
      </p>
      <InsertTodoItem
        todoItems={todoItems}
        onChange={onChange}
        onClick={onClick}
      />
      <TodoList
        todoItems={todoItems}
        onClickConfirm={onClickConfirm}
      />
    </div>
  );
}
