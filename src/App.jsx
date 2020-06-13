import React, { useState } from 'react';

import Main from './Main';

function App() {
  const initialState = {
    todos: [],
    inputText: '',
  };
  const [state, setState] = useState(initialState);
  const { todos } = state;

  function handleInputText(event) {
    setState({
      ...state,
      inputText: event.target.value,
    });
  }

  function getNextId() {
    if (todos.length === 0) {
      return 1;
    }
    return todos.reduce((acc, cur) => {
      const { id } = cur;
      return id > acc ? id : acc;
    }, 0) + 1;
  }

  function handleAddTask(task) {
    const todo = {
      id: getNextId(),
      task,
      complete: true,
    };
    setState({
      ...state,
      todos: [...todos, todo],
      inputText: '',
    });
  }

  function handleDeleteTask(taskId) {
    setState({
      ...state,
      todos: todos.filter((todo) => {
        const { id } = todo;
        return id !== taskId;
      }),
    });
  }

  return (
    <Main
      state={state}
      handleAddTask={handleAddTask}
      handleDeleteTask={handleDeleteTask}
      handleInputText={handleInputText}
    />
  );
}

export default App;
