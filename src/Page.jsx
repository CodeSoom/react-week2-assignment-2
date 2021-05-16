import React from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function Page({
  todo, todoList,
  onChangeText, onClickAddTodo, onClickRemoveTodo,
}) {
  return (
    <div>
      <p>To-do</p>
      <TodoInput
        todo={todo}
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
