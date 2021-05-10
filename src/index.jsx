import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Page from "./Page";

function App() {
  const [state, setState] = useState({
    todoList: [],
    todo: '',
  });

  const { todo, todoList } = state;

  function handleClick() {
    setState({
      todoList: [...todoList, <li>{todo}<button type="button">완료</button></li>],
      todo,
    });
  }

  function handleChange(event) {
    setState({
      todoList,
      todo: event.target.value,
    });
  }

  return (
    <Page
      onChange={handleChange}
      onClick={handleClick}
      todoList={todoList}
    />
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);


