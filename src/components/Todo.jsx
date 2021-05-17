import React, { useState } from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function Todo() {
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
