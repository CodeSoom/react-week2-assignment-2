import React from 'react';

import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

export default function Todo({
  todoList,
  input,
  handleChangeInput,
  handleClickAddTodo,
  handleClickRemoveTodo,
  handleSubmit,
}) {
  return (
    <div>
      <h1>
        To-Do
        (
        {todoList.length}
        )
      </h1>
      <TodoForm
        input={input}
        onChangeInput={handleChangeInput}
        onClickSubmitButton={handleClickAddTodo}
        onSubmit={handleSubmit}
      />
      <TodoList
        todoList={todoList}
        onClicktoRemove={handleClickRemoveTodo}
      />
    </div>
  );
}
