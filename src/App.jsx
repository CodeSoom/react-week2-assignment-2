import React, { useState } from 'react';

import Page from './Page';

// 상태관리
export default function App() {
  const [state, setState] = useState({
    toDoInput: '',
    toDos: [],
  });

  const { toDoInput, toDos } = state;

  function handleToDoInput(e) {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  }

  function createToDo() {
    if (toDoInput) {
      const newToDo = {
        uuid: Math.random() + 1,
        text: toDoInput,
      };
      setState({
        toDoInput: '',
        toDos: [...toDos, newToDo],
      });
    }
  }

  function deleteToDo(uuid) {
    setState({
      ...state,
      toDos: toDos.filter((thisToDo) => thisToDo.uuid !== uuid),
    });
  }

  return (
    <Page
      toDoInput={toDoInput}
      toDos={toDos}
      handleToDoInput={handleToDoInput}
      createToDo={createToDo}
      deleteToDo={deleteToDo}
    />
  );
}
