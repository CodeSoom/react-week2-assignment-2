import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Page from './page';

function App() {
  const [toDoState, setToDoState] = useState({ index: 0, todo: [] });
  const [inputState, setInputState] = useState({ inputText: '' });
  const { inputText } = inputState;
  const { todo } = toDoState;
  function handleAddClick() {
    const { index } = toDoState;
    setInputState({ ...inputState.inputText, inputText: '' });
    setToDoState({
      ...toDoState,
      index: index + 1,
      todo: [...toDoState.todo, { index: index + 1, title: inputText }],
    });
  }
  function handleChange(e) {
    setInputState({ ...inputState, inputText: e.target.value });
  }
  function clickComplete(index) {
    setToDoState({ ...toDoState, todo: [...todo.filter((v) => v.index !== index)] });
  }

  return (
    <Page
      inputText={inputText}
      onChange={handleChange}
      addClick={handleAddClick}
      todo={todo}
      clickComplete={clickComplete}
    />
  );
}
ReactDOM.render(<App />, document.getElementById('app'));
