import React from 'react';

import TodoInput from './TodoInput';
import Todos from './Todos';

function MainPage({
  todos,
  todoInput,
  onChangeContent,
  onClickAdd,
  onClickDelete,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <TodoInput
        todoInput={todoInput}
        onChangeContent={onChangeContent}
        onClickAdd={onClickAdd}
      />
      <Todos
        todos={todos}
        onClickDelete={onClickDelete}
      />
    </div>
  );
}

export default MainPage;
