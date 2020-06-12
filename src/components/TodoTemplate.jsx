import React from 'react';

import TodoHeaderTemplate from './TodoHeader/TodoHeaderTemplate';
import TodoList from './TodoBody/TodoList';

export default function TodoTemplate({
  state, onClickAdd, onClickRemove, handleInputValueChange,
}) {
  const { todos, inputValue } = state;

  return (
    <div>
      <TodoHeaderTemplate
        onClick={onClickAdd}
        inputValue={inputValue}
        handleChange={handleInputValueChange}
      />
      <TodoList
        todos={todos}
        onClick={onClickRemove}
      />
    </div>
  );
}
