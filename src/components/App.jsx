import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [state, setState] = useState(
    {
      textInput: '',
      toDoArray: [],
    },
  );

  const { textInput, toDoArray } = state;

  function handleTextInput(event) {
    setState((prevState) => ({ textInput: event.target.value, toDoArray: prevState.toDoArray }));
  }

  function handleAddButton(e) {
    e.preventDefault();
    setState((prevState) => ({
      textInput: '',
      toDoArray: [...prevState.toDoArray, prevState.textInput],
    }));
  }

  function handleCompleteButton(deleteIndex) {
    setState((prevState) => (
      {
        textInput: prevState.textInput,
        toDoArray: prevState.toDoArray.filter((_, index) => index !== deleteIndex),
      }
    ));
  }

  return (
    <Page
      textInput={textInput}
      toDoArray={toDoArray}
      onTextChange={handleTextInput}
      onAddButtonClick={handleAddButton}
      onCompleteButtonClick={handleCompleteButton}
    />
  );
}

export default App;
