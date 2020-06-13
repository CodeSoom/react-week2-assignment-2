import React, { useState } from 'react';

import Page from './Page';

// 상태관리
export default function App() {
  const [state, setState] = useState({
    toDoInput: '',
    toDoList: [],
  });

  const { toDoInput, toDoList } = state;

  function handleToDoInput(e) {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  }

  function createToDo() {
    if (toDoInput.length) {
      const newToDo = {
        id: Math.random() + 1,
        text: toDoInput.slice(),
      };
      setState({
        toDoInput: '',
        toDoList: [...toDoList, newToDo],
      });
    }
  }

  function deleteToDo(id) {
    setState({
      ...state,
      toDoList: toDoList.filter((thisToDo) => thisToDo.id !== id),
    });
  }

  return (
    <Page
      toDoInput={toDoInput}
      toDoList={toDoList}
      handleToDoInput={handleToDoInput}
      createToDo={createToDo}
      deleteToDo={deleteToDo}
    />
  );
}
