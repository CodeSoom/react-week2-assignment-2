import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import InputForm from './InputForm';
import UnOrderList from './UnOrderList';

function App() {
  const [state, setState] = useState({
    toDos: [],
    id: 0,
  });

  const { toDos, id } = state;

  function handleClick(e) {
    const input = document.getElementById('input');
    const { value } = input;
    input.value = '';

    e.preventDefault();

    setState({
      ...state,
      toDos: [...toDos, value],
      id: id + 1,
    });
  }

  function handleClickCompleteList(e) {
    const ul = document.querySelector('ul');
    ul.removeChild(e.target.parentNode);
  }

  return (
    <div>
      <h1>To-do</h1>
      <InputForm onClick={handleClick} />
      <UnOrderList
        onClick={handleClickCompleteList}
        toDos={toDos}
        id={id}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
