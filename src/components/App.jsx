import React, { useState } from 'react';
import { v4 as generateId } from 'uuid';

import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

function App() {
  const [state, setState] = useState(
    {
      toDoInput: '',
      toDoList: [],
    },
  );

  const { toDoInput, toDoList } = state;

  function handleToDoInput(event) {
    setState((prevState) => ({ ...prevState, toDoInput: event.target.value }));
  }

  function handleToDoSubmit(e) {
    e.preventDefault();

    const newToDo = {
      id: generateId(),
      content: toDoInput,
    };

    setState((prevState) => ({
      toDoInput: '',
      toDoList: [...prevState.toDoList, newToDo],
    }));
  }

  function handleClickDelete(idToDelete) {
    setState((prevState) => (
      {
        ...prevState,
        toDoList: prevState.toDoList.filter((toDo) => toDo.id !== idToDelete),
      }
    ));
  }

  return (
    <>
      <h1>To-do</h1>
      <ToDoForm
        toDoInput={toDoInput}
        onChangeToDo={handleToDoInput}
        onSubmit={handleToDoSubmit}
      />
      <ToDoList
        toDoList={toDoList}
        onClickDelete={handleClickDelete}
      />
    </>
  );
}

export default App;
