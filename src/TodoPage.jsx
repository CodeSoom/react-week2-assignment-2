import React from 'react';
import TodoForm from './TodoForm';
import Todos from './Todos';

function TodoPage({
  onSubmit,
  todoItems,
  onClick,
}) {
  return (
    <div>
      <p>assignment2</p>
      <h3>To-do</h3>
      <TodoForm
        onSubmit={onSubmit}
      />
      <Todos todoItems={todoItems} onClick={onClick} />
    </div>
  );
}

export default TodoPage;
