import React from 'react';

import Title from './Title';
import TodoContainer from './todo/TodoContainer';

export default function AppView({
  currentTodo, onChangeTodo, onSubmit, todoItems, onTodoDone,
}) {
  return (
    <>
      <Title />
      <TodoContainer
        todoItems={todoItems}
        onTodoDone={onTodoDone}
        currentTodo={currentTodo}
        onChangeTodo={onChangeTodo}
        onSubmit={onSubmit}
      />
    </>
  );
}
