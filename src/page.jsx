import React from 'react';

import TodoCreate from './todoCreate';
import TodoComplete from './todoComplete';

export default function Page({
  todo, todos, handleTodoChange, handleCreateClick, handleCompleteClick,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <TodoCreate
        todo={todo}
        handleTodoChange={handleTodoChange}
        handleCreateClick={handleCreateClick}
      />
      <TodoComplete
        todos={todos}
        handleCompleteClick={handleCompleteClick}
      />
    </div>
  );
}
