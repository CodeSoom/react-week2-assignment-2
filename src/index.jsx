/* @jsx React.createElement */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

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
      todoList: [...todoList, todoTitle],
    });
  }

  function handleClickDelete(pos) {
    setState({
      todoTitle,
      todoList: [...todoList.slice(0, pos), ...todoList.slice(pos + 1)],
    });
  }

  return (
    <div>
      <h3>To-Do App</h3>
      <TodoInput
        value={todoTitle}
        onChangeTitle={handleChangeTitle}
        onClickAdd={handleClickAdd}
      />
      <TodoList
        todoList={todoList}
        onClickDelete={handleClickDelete}
      />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
