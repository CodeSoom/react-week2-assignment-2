import React from 'react';

import TodoCreate from './todoCreate';
import TodoComplete from './todoComplete';

function Page({
  todo, todoList, handleTodoChange, handleCreateClick, handleCompleteClick,
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
        todoList={todoList}
        handleCompleteClick={handleCompleteClick}
      />
    </div>
  );
}
export default Page;
