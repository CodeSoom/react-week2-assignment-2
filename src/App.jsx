import React, { useState } from 'react';

import Main from './Main';

function App() {
  const initialState = {
    toDos: [],
    inputText: '',
  };
  const [state, setState] = useState(initialState);
  const { toDos } = state;

  function handleInputText(event) {
    setState({
      ...state,
      inputText: event.target.value,
    });
  }

  function getNextId() {
    if (toDos.length === 0) {
      return 1;
    }
    return toDos.reduce((acc, cur) => {
      const { id } = cur;
      return id > acc ? id : acc;
    }, 0) + 1;
  }

  function handleAddTask(task) {
    const toDo = {
      id: getNextId(),
      task,
      complete: true,
    };
    setState({
      ...state,
      toDos: [...toDos, toDo],
      inputText: '',
    });
  }

  function handleDeleteTask(taskId) {
    setState({
      ...state,
      toDos: toDos.filter((toDo) => {
        const { id } = toDo;
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
