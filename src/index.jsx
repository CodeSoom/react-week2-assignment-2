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
      todoTitle: text,
      todoList,
    });
  }

  function handleClickAdd() {
    if (isEmpty(todoTitle)) return;

    setState({
      todoTitle: '',
      todoList: [...todoList, { id: Date.now(), title: todoTitle }],
    });
  }

  function handleClickDelete(todoItem) {
    setState({
      todoTitle,
      todoList: todoList.filter((todo) => todo.id !== todoItem.id),
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
