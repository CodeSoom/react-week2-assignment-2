import React, { useState } from 'react';

import { initialTodosState, TodosContext } from './TodosContext';

const TodosProvider = ({ children }) => {
  const [state, setState] = useState(initialTodosState);
  const { todos, inputValue } = state;

  const getTodo = (pId) => [...todos].filter((todo) => todo.id === pId);

  const getNextId = () => Math.max(...todos.map((todo) => todo.id)) + 1;

  const generateId = () => (todos.length === 0 ? 1 : getNextId());

  const addTodo = (pTitle) => {
    const newTodo = {
      id: generateId(),
      title: pTitle,
    };

    setState({
      todos: [...todos, newTodo],
      inputValue: '',
    });
  };

  const removeTodo = (pId) => {
    setState({
      todos: todos.filter((todo) => todo.id !== pId),
      inputValue,
    });
  };

  const handleChange = (pInputValue) => {
    setState({
      todos,
      inputValue: pInputValue,
    });
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        inputValue,
        getTodo,
        addTodo,
        removeTodo,
        handleChange,
      }}
    >
      { children }
    </TodosContext.Provider>
  );
};

export default TodosProvider;
