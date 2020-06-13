import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
        id: uuidv4(),
        text: toDoInput,
      };
      console.log(newToDo);
      setState({
        toDoInput: '',
        toDos: [...toDos, newToDo],
      });
    }
  }

  function deleteToDo(id) {
    setState({
      ...state,
      toDos: toDos.filter((thisToDo) => thisToDo.id !== id),
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
