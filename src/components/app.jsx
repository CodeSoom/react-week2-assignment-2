import React from 'react';

import AddForm from './addForm';
import TodoList from './todoList';

export default function app() {
  return (
    <div>
      <h1>To-do</h1>
      <AddForm />
      <TodoList />
    </div>
  );
}
