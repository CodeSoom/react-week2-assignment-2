import React from 'react';

import InputTodo from './InputTodo';
import TodoList from './TodoList';

export default function Page({
  inputText,
  todoList,
  onChangeInput,
  onClickAdd,
  onClickDelete,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <InputTodo
        inputText={inputText}
        onChange={onChangeInput}
        onClick={onClickAdd}
      />
      <TodoList
        todoList={todoList}
        onClick={onClickDelete}
      />
    </div>

  );
}
