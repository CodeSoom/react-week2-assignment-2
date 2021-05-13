import React, { useState } from 'react';

import ToDoList from './pages/TodoList';

function App() {
  const [state, setState] = useState({ toDos: [] });
  const { toDos } = state;

  function handleClickAdd() {
    const input = document.getElementById('input').value;
    document.getElementById('input').value = '';
    setState({ toDos: toDos.concat(input) });
  }

  function handleClickDone(done) {
    setState({ toDos: toDos.filter((todo) => todo !== done) });
  }

  return (
    <ToDoList
      toDos={toDos}
      onClickAdd={handleClickAdd}
      onClickDone={handleClickDone}
    />
  );
}

export default App;
