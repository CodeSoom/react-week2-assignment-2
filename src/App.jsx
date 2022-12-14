import { useState } from 'react';

import Input from './components/Input';
import List from './components/List';

export default function App() {
  const [state, setState] = useState({
    todoList: [],
    todoInput: '',
  });

  const { todoList, todoInput } = state;

  function handleClickAdd() {
    if (todoInput === '' || todoList.includes(todoInput)) return;

    setState({
      todoInput: '',
      todoList: [...todoList, todoInput],
    });
  }

  function handleClickDone(index) {
    setState({
      ...state,
      todoList: todoList.filter((todo, todoIndex) => todoIndex !== index),
    });
  }

  function handleChnageInput(e) {
    setState({
      ...state,
      todoInput: e.target.value,
    });
  }

  return (
    <div>
      <p>To-do</p>
      <Input
        todoInput={todoInput}
        onClick={handleClickAdd}
        onChange={handleChnageInput}
      />
      <List
        todoList={todoList}
        onClick={handleClickDone}
      />
    </div>
  );
}
