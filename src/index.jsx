import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Ul({ onClick, toDos, id }) {
  return (
    <ul>
      {toDos[0] === undefined ? (<h3>할 일이 없어요!</h3>)
        : (
          <List
            onClick={onClick}
            toDos={toDos}
            key={id}
          />
        )}
    </ul>
  );
}

function List({ onClick, toDos, key }) {
  return (
    <>
      {toDos.map((toDo) => (
        <li key={key}>
          {toDo}
          <button type="button" onClick={onClick}>
            완료
          </button>
        </li>
      ))}
    </>
  );
}

function InputForm({ onClick }) {
  return (
    <form>
      <input id="input" type="text" required />
      <button type="submit" onClick={onClick}>
        추가
      </button>
    </form>
  );
}

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
      <Ul
        onClick={handleClickCompleteList}
        toDos={toDos}
        id={id}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
