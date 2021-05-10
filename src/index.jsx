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

  function handleClickRemove(key) {
    setState({
      todoList: todoList.filter((todo) => {
        return todo.key !== key
      })
    })
  }

  function handleClick() {
    setState({
      todoList: [...todoList, <Todo key={todo} todo={todo} onClickRemove={handleClickRemove} />],
      todo: '',
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
      todo={todo}
      todoList={todoList}
      onChange={handleChange}
      onClick={handleClick}
    />
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);


