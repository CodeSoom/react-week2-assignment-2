import React, { useState } from 'react';

import TodoTemplate from './TodoTemplate';

export default function App() {
  const [todosState, setTodosState] = useState({
    todos: [],
  });

  const { todos } = todosState;

  function generateKey() {
    if (todos.length === 0) {
      return 0;
    }
    return Math.max(...todos.map(({ key }) => key)) + 1;
  }

  function handleClickAdd(todoContent) {
    setTodosState({
      todos: todos.concat(
        { content: todoContent, key: generateKey() },
      ),
    });
  }

  function handleClickRemove(target) {
    setTodosState({
      todos: todos.filter(({ key }) => key !== target),
    });
  }

  const [inputValueState, setInputValueState] = useState({
    inputValue: '',
  });

  function handleInputValueChange({ target }) {
    const { value } = target;
    setInputValueState({
      inputValue: value,
    });
  }

  function clearInputValue() {
    setInputValueState({
      inputValue: '',
    });
  }

  return (
    <TodoTemplate
      todos={todos}
      onClickAdd={handleClickAdd}
      onClickRemove={handleClickRemove}
      inputValueState={inputValueState}
      handleInputValueChange={handleInputValueChange}
      clearInputValue={clearInputValue}
    />
  );
}
