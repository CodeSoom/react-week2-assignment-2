import React, { useState } from 'react';

import AddForm from './addForm';
import TodoList from './todoList';

export default function app() {
  const [state, setState] = useState({
    todoList: [
      { id: 1, contents: '11' },
      { id: 2, contents: '22' },
    ],
  });

  const { todoList } = state;

  function handleDelete(todoItem) {
    setState({ todoList: todoList.filter((item) => item.id !== todoItem.id) });
  }

  return (
    <div>
      <h1>To-do</h1>
      <AddForm />
      <TodoList
        todoList={todoList}
        handleDelete={handleDelete}
      />
    </div>
  );
}
