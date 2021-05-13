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
      todo: '',
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
      todoList: todoList.filter((todoItem) => todoItem !== key),
      todo,
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
