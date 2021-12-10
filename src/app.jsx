import React, { useState } from 'react';

import TodoForm from './todoForm';
import TodoList from './todoList';

export default function App() {
  const [todo, setTodo] = useState({
    todos: [],
  });
  const { todos } = todo;

  function handleClickAdd(todoItem) {
    setTodo({
      todos: [...todos, todoItem],
    });
  }

  function handleClickDone(todoItem) {
    setTodo({
      todos: todos.filter((it) => it !== todoItem),
    });
  }

  return (
    <>
      <h1>To-do</h1>
      <TodoForm
        onClickAdd={handleClickAdd}
      />
      <TodoList
        todos={todos}
        handleClickDone={handleClickDone}
      />
    </>
  );
}
