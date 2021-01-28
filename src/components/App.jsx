import React, { useState } from 'react';

import AddForm from './AddForm';
import TodoList from './TodoList';

export default function app() {
  const [state, setState] = useState({
    input: '',
    todoList: [],
  });

  const { todoList, input } = state;

  function handleChange(event) {
    event.preventDefault();
    setState({ todoList, input: event.target.value });
  }

  function handleAdd(contents) {
    if (!contents) return;

    setState(
      {
        todoList: [...todoList, { id: Date.now(), contents }],
        input: '',
      },
    );
  }

  function handleDelete(todoItem) {
    setState({ todoList: todoList.filter((item) => item.id !== todoItem.id) });
  }

  return (
    <div>
      <h1>To-do</h1>
      <AddForm
        input={input}
        handleChange={handleChange}
        handleAdd={handleAdd}
      />
      <TodoList
        todoList={todoList}
        handleDelete={handleDelete}
      />
    </div>
  );
}
