import React from 'react';

import TodoHeader from './TodoHeader/TodoHeader';
import TodoList from './TodoBody/TodoList';

export default function TodoTemplate({
  state, onClickAdd, onClickRemove, handleInputValueChange,
}) {
  const { todos, inputValue } = state;

  return (
    <div>
      <TodoHeader
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
