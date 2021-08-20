import React from "react";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function Page({
  todo,
  todos,
  handleInput,
  handleClickAdd,
  handleDelete
}) {
  return (
    <div>
      <h1>To-do</h1>

      <TodoInput
        todo={todo}
        handleInput={handleInput}
        handleClickAdd={handleClickAdd}
      />

      <TodoList todos={todos} handleDelete={handleDelete} />
    </div>
  );
}
