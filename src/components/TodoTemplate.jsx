import React from 'react';

import TodoHeader from './TodoHeader/TodoHeader';
import TodoList from './TodoBody/TodoList';

export default function TodoTemplate({
  todos, onClickAdd, onClickRemove, inputValueState, handleInputValueChange, clearInputValue,
}) {
  return (
    <div>
      <TodoHeader
        onClick={onClickAdd}
        inputValueState={inputValueState}
        handleChange={handleInputValueChange}
        clearInputValue={clearInputValue}
      />
      <TodoList
        todos={todos}
        onClick={onClickRemove}
      />
    </div>
  );
}
