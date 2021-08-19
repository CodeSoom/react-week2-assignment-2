import { useState } from 'react';
import nextId from 'react-id-generator';

import Page from './components/Page';

export default function App() {
  const [state, setState] = useState({
    toDo: '',
    toDoItems: [],
  });

  const { toDo, toDoItems } = state;

  function handleClickAddToDo() {
    setState({
      ...state,
      toDo: '',
      toDoItems: toDoItems.concat({
        id: nextId(),
        toDo,
      }),
    });
  }

  function onClickCompleteToDo(itemId) {
    setState({
      ...state,
      toDoItems: toDoItems.filter((item) => item.id !== itemId),
    });
  }

  function handleInputChange(event) {
    setState({
      ...state,
      toDo: event.target.value,
    });
  }

  return (
    <Page
      toDo={toDo}
      onInputChange={handleInputChange}
      onClickAddToDo={handleClickAddToDo}
      toDoItems={toDoItems}
      onClickCompleteToDo={onClickCompleteToDo}
    />
  );
}
