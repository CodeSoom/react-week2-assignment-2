/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import InputWithButton from './components/InputWithButton';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  function handleClickAdd() {
    if (todoInput === '') { return; }
    setTodoList([...todoList, todoInput]);
    setTodoInput('');
  }

  return (
    <div>
      <h1>To-do</h1>

      <InputWithButton
        inputValue={todoInput}
        setInputValue={setTodoInput}
        handleClick={handleClickAdd}
      />
      {todoList.length === 0 ? (
        <p>할 일이 없어요!</p>
      ) : (
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
