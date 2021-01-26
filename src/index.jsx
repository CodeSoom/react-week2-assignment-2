import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import TodoInput from './todoInput';
import AddButton from './addButton';
import NothingToDo from './nothingToDo';
import List from './list';

function App() {
  const [state, setState] = useState({
    todoInput: '',
    todoList: [],
  });

  const { todoInput, todoList } = state;

  function setInput(e) {
    setState({
      ...state,
      todoInput: e.target.value,
    });
  }

  function getInput() {
    setState({
      todoInput: '',
      todoList: [...todoList, todoInput],
    });
  }

  return (
    <div>
      <h1>To-do</h1>
      <TodoInput onChange={setInput} />
      <AddButton onClick={getInput} />
      <NothingToDo />
      <List todoList={todoList} />
    </div>
  );
}

ReactDOM.render(<App> </App>, document.getElementById('app'));
