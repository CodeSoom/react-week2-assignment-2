import React, { useState } from 'react';

import ToDoList from './pages/TodoList';

function App() {
  const [state, setState] = useState({ toDos: [], inputValue: '', lastId: null });
  const { toDos, inputValue, lastId } = state;

  function handleChangeInputTitle(value) {
    setState({ ...state, inputValue: value });
  }

  function handleClickAddTitle() {
    const newId = lastId + 1;
    setState({ toDos: toDos.concat({ id: newId, title: inputValue }), inputValue: '', lastId: newId });
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
