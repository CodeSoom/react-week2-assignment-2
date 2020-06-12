import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Page from './page/Page';


function App() {
  const [state, setState] = useState({
    todo: [],
  });

  function addTodo() {
    const inputVal = document.getElementById('input').value;
    document.getElementById('input').value = '';
    setState({
      todo: [...state.todo, inputVal],
    });
  }

  function deleteBelow(passedKey) {
    const array = state.todo.filter((i, key) => (key !== passedKey));
    setState({
      todo: array,
    });
  }

  return (
    <div>
      <Page />
      <p>
        <input id="input" />
        <button type="button" onClick={() => addTodo()}>추가</button>
      </p>
      <div>
        {
          state.todo.length !== 0 ? state.todo.map((i, key) => (
            <div key={i}>
              {i}
              <button type="button" onClick={() => deleteBelow(key)}>완료</button>
            </div>
          )) : <div>할 일이 없어요!</div>
        }
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
