import React from 'react';

import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

export default function Todo({
  todoList,
  input,
  handleChangeInput,
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
        onSubmit={handleSubmit}
      />
      <TodoList todoList={todoList} handleClickRemove={handleClickRemoveTodo} />
    </div>
  );
}
