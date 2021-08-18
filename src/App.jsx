import React, { useState } from 'react';
import InputTodo from './InputTodo';
import AddButton from './AddButton';
import TodoList from './TodoList';

export default function App() {
  const [state, setState] = useState({
    inputText: '',
    todoList: [{ id: 0, contents: '아무말' }],
  });

  return (
    <div>
      <h1>To-do</h1>
      <InputTodo state={state} setState={setState} />
      <AddButton state={state} setState={setState} />
      <TodoList state={state} setState={setState} />
    </div>
  );
}
