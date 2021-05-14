import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Page from './Page';

function App() {
  const [state, setState] = useState({
    todo: '',
    todoList: [],
  });

  const { todo, todoList } = state;

  function handleClick() {
    setState({
      ...state,
      todoList: [...todoList, todo],
    });
  }

  function handleChange(value) {
    setState({
      ...state,
      todo: value,
    });
  }

  const handleClickRemove = (key) => {
    setState({
      ...state,
      todoList: todoList.filter((todoItem) => todoItem !== key),
    });
  };

  return (
    <Page
      todo={todo}
      todoList={todoList}
      onChange={handleChange}
      onClick={handleClick}
      onClickRemove={handleClickRemove}
    />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
