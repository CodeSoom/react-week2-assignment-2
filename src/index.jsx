import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import TodoInput from './todoInput';
import AddButton from './addButton';
import NothingToDo from './nothingToDo';

function App() {
  const [state, setState] = useState({
    thing: '',
  });

  function setInput(e) {
    setState({
      thing: e.target.value,
    });
  }

  function getInput() {
    const { thing } = state;

    console.log(thing);
  }

  return (
    <div>
      <h1>To-do</h1>
      <TodoInput onChange={setInput} />
      <AddButton onClick={getInput} />
      <NothingToDo />
    </div>
  );
}

ReactDOM.render(<App> </App>, document.getElementById('app'));
