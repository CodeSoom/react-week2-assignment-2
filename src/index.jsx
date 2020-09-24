/* @jsx React.createElement */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TodoInput from './TodoInput';

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
    todoList.push(todoInput);
    setState({
      todoInput: '',
      todoList,
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
      {/* <TodoList
        todoList={}
        onClick={}
      /> */}
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
