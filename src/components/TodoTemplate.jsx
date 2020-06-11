import React from 'react';

import TodoHeader from './TodoHeader/TodoHeader';
import TodoList from './TodoBody/TodoList';

export default function TodoTemplate({ todos, onClickAdd, onClickRemove }) {
  return (
    <div>
      <TodoHeader onClick={onClickAdd} />
      <TodoList
        todos={todos}
        onClick={onClickRemove}
      />
    </div>
  );
}
