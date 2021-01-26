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
    if (todoInput === '') return;
    if (todoList.includes(todoInput)) return;

    setState({
      todoInput: '',
      todoList: [...todoList, todoInput],
    });
  }

  function onClickComplete(index) {
    setState({
      ...state,
      todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
    });
  }

  return (
    <div>
      <h1>To-do</h1>
      <TodoInput value={todoInput} onChange={setInput} />
      <AddButton onClick={getInput} />
      {todoList.length === 0 ? <NothingToDo /> : (
        <List
          todoList={todoList}
          onClickComplete={onClickComplete}
        />
      )}
    </div>
  );
}

ReactDOM.render(<App> </App>, document.getElementById('app'));
