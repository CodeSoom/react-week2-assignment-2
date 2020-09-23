import React, { useState } from 'react';

import InputForm from './InputForm';
import UnOrderList from './UnOrderList';

function App() {
  const [state, setState] = useState({
    toDos: [],
  });

  const { toDos } = state;

  function handleClick(e) {
    const input = document.getElementById('input');
    const { value } = input;
    input.value = '';

    e.preventDefault();

    setState({
      toDos: [...toDos, { toDo: value, id: toDos.length + 1 }],
    });
  }

  function handleClickCompleteList(toDoId) {
    setState({
      toDos: toDos.filter(({ id }) => id !== toDoId),
    });
  }

  return (
    <div>
      <h1>To-do</h1>
      <InputForm onClick={handleClick} />
      <UnOrderList
        onClick={handleClickCompleteList}
        toDos={toDos}
      />
    </div>
  );
}

export default App;
