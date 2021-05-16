import React from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function Page({
  inputtedTodo, todoList,
  onChangeText, onClickAddTodo, onClickRemoveTodo,
}) {
  return (
    <div>
      <p>To-do</p>
      <TodoInput
        inputtedTodo={inputtedTodo}
        onChangeText={onChangeText}
        onClickAddTodo={onClickAddTodo}
      />
      <TodoList
        todoList={todoList}
        onClickRemoveTodo={onClickRemoveTodo}
      />
    </div>
  );
}
