/* @jsx React.createElement */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TodoPage from './TodoPage';

const isEmpty = (text) => text.length === 0;

function App() {
  const [state, setState] = useState({
    todoTitle: '',
    todoList: [],
  });

  const { todoTitle, todoList } = state;

  function handleChangeTitle(text) {
    setState({
      ...state,
      todoTitle: text,
    });
  }

  function handleClickAdd() {
    if (isEmpty(todoTitle)) return;

    setState({
      todoTitle: '',
      todoList: [...todoList, { id: Date.now(), title: todoTitle }],
    });
  }

  function handleClickDelete(id) {
    setState({
      todoTitle,
      todoList: todoList.filter((todo) => id !== todo.id),
    });
  }

  return (
    <div>
      <TodoPage
        todoTitle={todoTitle}
        todoList={todoList}
        handleChangeTitle={handleChangeTitle}
        handleClickAdd={handleClickAdd}
        handleClickDelete={handleClickDelete}
      />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
