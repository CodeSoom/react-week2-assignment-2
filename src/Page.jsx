import React from 'react';

import InsertForm from './InsertForm';
import TodoList from './TodoList';

export default function Page({
  note, todoList, onChangeWriteTodo, onClickAddTodo, onClickConfirm,
}) {
  return (
    <div>
      <p>
        To-do
      </p>
      <InsertForm
        note={note}
        onChangeWriteTodo={onChangeWriteTodo}
        onClickAddTodo={onClickAddTodo}
      />
      <TodoList
        todoList={todoList}
        onClickConfirm={onClickConfirm}
      />
    </div>
  );
}
