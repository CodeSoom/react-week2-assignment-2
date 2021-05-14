import React, { useState } from 'react';

import ToDoList from './pages/TodoList';

function App() {
  const [state, setState] = useState({ toDos: [], inputValue: '' });
  const { toDos, inputValue } = state;

  function handleInputOnChanged(value) {
    setState({ ...state, inputValue: value });
  }

  function handleClickAdd() {
    setState({ toDos: toDos.concat(inputValue), inputValue: '' });
  }

  function handleClickDone(done) {
    setState({ toDos: toDos.filter((todo) => todo !== done) });
  }

  return (
    <ToDoList
      toDos={toDos}
      inputValue={inputValue}
      inputOnChanged={handleInputOnChanged}
      onClickAdd={handleClickAdd}
      onClickDone={handleClickDone}
    />
  );
}

export default App;
