import React, { useState } from 'react';

import Input from './Input';
import Button from './Button';

export default function App() {
  const [state, setState] = useState({
    todoTitle: '',
    todoItems: [],
  });

  const { todoTitle, todoItems } = state;

  function handleChangeTodo(event) {
    setState({
      ...state,
      todoTitle: event.target.value,
    });
  }

  function handleClickAddTodo() {
  }

  function handleClickDelete() {
    // Todo: 완료 버튼 구현하기
  }

  return (
    <div>
      <p>To do list</p>
      <Input
        value={todoTitle}
        onChange={handleChangeTodo}
        onClcik={handleClickAddTodo}
      />
      <Button
        onClick={handleClickDelete}
      />
    </div>
  );
}
