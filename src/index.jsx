import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Page from './page';

function App() {
  const [toDoState, setToDoState] = useState({ index: 0, todos: [] });
  const [inputState, setInputState] = useState({ inputText: '' });

  const { inputText } = inputState;

  const { todos } = toDoState;

  function handleAddClick() {
    const { index } = toDoState;
    setInputState({ ...inputState.inputText, inputText: '' });

    setToDoState({
      ...toDoState,
      index: index + 1,
      todos: [...toDoState.todos, { index: index + 1, title: inputText }],
    });
  }

  function handleChange(e) {
    setInputState({ ...inputState, inputText: e.target.value });
  }

  function addClickComplete(index) {
    setToDoState({ ...toDoState, todos: [...todos.filter((v) => v.index !== index)] });
  }

  return (
    <Page
      inputText={inputText}
      onChange={handleChange}
      onAddClick={handleAddClick}
      todos={todos}
      onCompleteClick={addClickComplete}
    />
  );
}
ReactDOM.render(<App />, document.getElementById('app'));
