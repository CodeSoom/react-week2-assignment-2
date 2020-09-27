import React, { useState } from 'react';

import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

function App() {
  const [state, setState] = useState({
    toDos: [],
    toDoText: '',
  });
  const { toDos, toDoText } = state;

  function handleInputToDoText(toDoTextFromInput) {
    setState({
      toDos: [...toDos],
      toDoText: toDoTextFromInput,
    });
  }

  function handleClick() {
    setState({
      toDos: [...toDos, { toDo: toDoText, id: Date.now() }],
      toDoText: '',
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
      <ToDoForm
        onClick={handleClick}
        toDoText={toDoText}
        onChange={handleInputToDoText}
      />
      <ToDoList
        onClick={handleClickCompleteList}
        toDos={toDos}
      />
    </div>
  );
}

export default App;
