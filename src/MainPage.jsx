import React from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

function MainPage({
  todoList,
  todoInput,
  onChange,
  onClickAdd,
  onClickDone,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <TodoInput
        todoInput={todoInput}
        onChange={onChange}
        onClickAdd={onClickAdd}
      />
      <TodoList
        todoList={todoList}
        onClickDone={onClickDone}
      />
    </div>
  );
}

export default MainPage;
