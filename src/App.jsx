import React, { useState } from 'react';

import ToDoList from './pages/TodoList';

function App() {
  const [state, setState] = useState({ toDos: [], inputValue: '', newIdIndex: 0 });
  const { toDos, inputValue, newIdIndex } = state;

  function handleChangeInputTitle(value) {
    setState({ ...state, inputValue: value });
  }

  function handleClickAddTitle() {
    const newId = newIdIndex + 1;
    setState({ toDos: toDos.concat({ id: newId, title: inputValue }), inputValue: '', newIdIndex: newId });
  }

  function handleClickDoneToDo(id) {
    setState({ ...state, toDos: toDos.filter((todo) => todo.id !== id) });
  }

  return (
    <ToDoList
      toDos={toDos}
      inputValue={inputValue}
      inputOnChanged={handleChangeInputTitle}
      onClickAdd={handleClickAddTitle}
      onClickDone={handleClickDoneToDo}
    />
  );
}

export default App;
