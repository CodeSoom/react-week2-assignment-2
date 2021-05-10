import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';
import Todo from './Todo';

function App() {
  const [state, setState] = useState({
    todoList: [],
    todo: '',
  });

  const { todo, todoList } = state;

  function handleClick() {
    setState({
      todoList: [...todoList,<Todo todo={todo} />],
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


