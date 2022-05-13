import React from 'react';

import TodoForm from './TodoForm';
import TodoItemsView from './TodoItemsView';

export default function TodoContainer({
  todoItems, onTodoDone, currentTodo, onChangeTodo, onSubmit,
}) {
  return (
    <>
      <TodoForm
        currentTodo={currentTodo}
        onChangeTodo={onChangeTodo}
        onSubmit={onSubmit}
      />
      <TodoItemsView
        todoItems={todoItems}
        onTodoDone={onTodoDone}
      />
    </>
  );
}
