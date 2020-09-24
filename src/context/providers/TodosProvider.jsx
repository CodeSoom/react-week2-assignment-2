import React, { useState } from 'react';

import { initialTodosState, TodosContext } from '../TodosContext';

const TodosProvider = ({ children }) => {
  const [state] = useState(initialTodosState);
  const { todos } = state;

  function getTodo(pId) {
    return [...todos].filter((_, id) => id === pId);
  }

  function addTodo() {
    console.log('add todo');
  }

  function removeTodo() {
    console.log('remove todo');
  }

  return (
    <TodosContext.Provider
      value={{
        todos,
        getTodo,
        addTodo,
        removeTodo,
      }}
    >
      { children }
    </TodosContext.Provider>
  );
};

export default TodosProvider;
