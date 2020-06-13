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
    console.log(name, value);
    setState({
      ...state,
      [name]: value,
    });
  }

  function createToDo() {
    const newToDo = {
      id: Math.random() + 1,
      text: toDoInput.slice(),
    };
    setState({
      toDoInput: '',
      toDoList: [...toDoList, newToDo],
    });
  }

  function deleteToDo(id) {
    setState({
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
