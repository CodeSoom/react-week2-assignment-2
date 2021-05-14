import React, { useState } from 'react';

import Input from './Input';
import TodoList from './TodoList';

export default function App() {
  const [state, setState] = useState({
    todo: '',
    todoList: [],
  });

  const { todo, todoList } = state;

  function handleClick() {
    setState({
      ...state,
      todoList: [...todoList, todo],
    });
  }

  function handleChange(value) {
    setState({
      ...state,
      todo: value,
    });
  }

  const handleClickRemove = (key) => {
    setState({
      ...state,
      todoList: todoList.filter((todoItem) => todoItem !== key),
    });
  };

  return (
    <div>
      <p>To-do</p>
      <Input
        todo={todo}
        onChange={handleChange}
        onClick={handleClick}
      />
      <TodoList
        todoList={todoList}
        onClickRemove={handleClickRemove}
      />
    </div>
  );
}
