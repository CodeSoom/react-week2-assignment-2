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

  function deleteTodo(passedKey) {
    const array = state.todo.filter((i, key) => (key !== passedKey));
    setState({
      todo: array,
    });
  }

  return (
    <div>
      <Page todo={state.todo} addTodo={addTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
