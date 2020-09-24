import React, { useState } from 'react';

import InputForm from './InputForm';
import ToDoList from './ToDoList';

function App() {
  const [state, setState] = useState({
    toDos: [],
  });
  const { toDos } = state;

  const [value, setValue] = useState('');

  function handleInputValue(e) {
    setValue(e.target.value);
  }

  function handleClick() {
    setState({
      toDos: [...toDos, { toDo: value, id: toDos.length + 1 }],
    });
    setValue('');
  }

  function handleClickCompleteList(toDoId) {
    setState({
      toDos: toDos.filter(({ id }) => id !== toDoId),
    });
  }

  return (
    <div>
      <h1>To-do</h1>
      <InputForm
        onClick={handleClick}
        onChange={handleInputValue}
        value={value}
      />
      <ToDoList
        onClick={handleClickCompleteList}
        toDos={toDos}
      />
    </div>
  );
}

export default App;
