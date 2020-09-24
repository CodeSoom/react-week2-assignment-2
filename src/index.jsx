/* @jsx React.createElement */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const isEmpty = (text) => text.length === 0;

function App() {
  const [state, setState] = useState({
    todoInput: '',
    todoList: [],
  });

  const { todoInput, todoList } = state;
  const placeholder = '할 일을 입력해주세요';

  function handleChangeInput(text) {
    setState({
      todoInput: text,
      todoList,
    });
  }

  function handleInsertClick() {
    if (isEmpty(todoInput)) return;

    setState({
      todoInput: '',
      todoList: [...todoList, todoInput],
    });
  }

  function handleDeleteClick(pos) {
    setState({
      todoInput,
      todoList: [...todoList.slice(0, pos), ...todoList.slice(pos + 1)],
    });
  }

  return (
    <div>
      <h3>To-Do App</h3>
      <TodoInput
        value={todoInput}
        placeholder={placeholder}
        onChange={handleChangeInput}
        onClick={handleInsertClick}
      />
      <TodoList
        todoList={todoList}
        onClick={handleDeleteClick}
      />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
