import React, { useState } from 'react';

import MainPage from './MainPage';

function App() {
  const initialState = {
    todos: [],
    inputText: '',
  };
  const [state, setState] = useState(initialState);
  const { todos } = state;

  function handleChangeText(event) {
    setState({
      ...state,
      inputText: event.target.value,
    });
  }

  function getNextId() {
    if (todos.length === 0) {
      return 1;
    }
    const idArray = todos.map((todo) => todo.id);
    const maxNumber = Math.max(...idArray);
    return maxNumber + 1;
  }

  function handleClickAddTask(task) {
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

  function handleClickDeleteTask(taskId) {
    setState({
      ...state,
      todos: todos.filter((todo) => {
        const { id } = todo;
        return id !== taskId;
      }),
    });
  }

  return (
    <MainPage
      state={state}
      handleClickAddTask={handleClickAddTask}
      handleClickDeleteTask={handleClickDeleteTask}
      handleChangeText={handleChangeText}
    />
  );
}

export default App;
