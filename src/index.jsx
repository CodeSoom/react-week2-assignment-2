/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  function handleClickAdd() {
    if (todoInput === '') { return; }
    setTodoList([...todoList, todoInput]);
    setTodoInput('');
  }

  function onChangeTodoInput(input) {
    setTodoInput(input);
  }

  function OnCompleteTodo(completeIndex) {
    setTodoList(todoList.filter((_, index) => index !== completeIndex));
  }

  return (
    <div>
      <h1>To-do</h1>
      <TodoInput
        todoInput={todoInput}
        onChangeTodoInput={onChangeTodoInput}
        handleClick={handleClickAdd}
      />
      {todoList.length === 0 ? (
        <p>할 일이 없어요!</p>
      ) : (
        <TodoList todoList={todoList} OnCompleteTodo={OnCompleteTodo} />
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
