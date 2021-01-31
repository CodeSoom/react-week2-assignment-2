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
    setState({
      ...state,
      input: event.target.value,
    });
  }

  function handleAdd(event) {
    event.preventDefault();
    if (!input) {
      return;
    }

    setState({
      ...state,
      todoList: [...todoList, { id: Date.now(), contents: input }],
      input: '',
    });
  }

  function handleDelete(todoItem) {
    setState({
      ...state,
      todoList: todoList.filter((item) => item.id !== todoItem.id),
    });
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
