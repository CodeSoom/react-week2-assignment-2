import React, { useState } from 'react';

import { initialTodosState, TodosContext } from './TodosContext';

const TodosProvider = ({ children }) => {
  const [state, setState] = useState(initialTodosState);
  const { todos, inputValue } = state;

  const getTodo = (pId) => [...todos].filter((_, id) => id === pId);

  const increaseId = () => Math.max(...todos.map((todo) => todo.id)) + 1;

  const generateId = () => (todos.length === 0 ? 1 : increaseId());

  const addTodo = () => {
    setState((prevState) => {
      const newTodo = {
        id: generateId(),
        title: prevState.inputValue,
      };
      return {
        todos: [
          ...todos,
          newTodo,
        ],
        inputValue: '',
      };
    });
  };

  const removeTodo = (pId) => {
    setState({
      todos: todos.filter((todo) => todo.id !== pId),
      inputValue,
    });
  };

  const handleChange = (event) => {
    setState({
      todos,
      inputValue: event.target.value,
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
