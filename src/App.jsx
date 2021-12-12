import React, { useState } from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  function handleChangeInput(todo) {
    setTodoInput(todo);
  }

  function handleClickAddButton() {
    setTodoList([...todoList, todoInput]);
    setTodoInput('');
  }

  function handleClickRemoveButton(index) {
    if (todoList.length === 1) {
      setTodoList([]);

      return;
    }

    setTodoList([
      ...todoList.slice(0, index),
      ...todoList.slice(index + 1, todoList.length),
    ]);
  }

  return (
    <div>
      <h2>To-do</h2>
      <TodoInput
        inputType="text"
        placeholder="enter todo thing"
        value={todoInput}
        buttonType="submit"
        buttonTitle="추가"
        onChangeInput={(e) => handleChangeInput(e.target.value)}
        onClickButton={handleClickAddButton}
      />
      <div>
        <TodoList
          todoItems={todoList}
          buttonType="button"
          buttonTitle="삭제"
          onClick={handleClickRemoveButton}
        />
      </div>
    </div>
  );
}
