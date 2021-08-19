import React, { useState } from 'react';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

export default function App() {
  const [state, setState] = useState({
    inputText: '',
    todoList: [],
  });

  function handleChange(value) {
    setState({
      ...state,
      inputText: value,
    });
  }

  function handleAddButton() {
    const id = Math.random();
    setState({
      ...state,
      todoList: [...state.todoList, { id, contents: state.inputText }],
    });
    console.log(state);
  }

  function handleDeleteButton(id) {
    setState({
      ...state,
      todoList: state.todoList.filter((todo) => todo.id !== id),
    });
  }

  return (
    <div>
      <h1>To-do</h1>
      <InputTodo state={state} onChange={handleChange} onClick={handleAddButton} />
      <TodoList state={state} onClick={handleDeleteButton} />
    </div>
  );
}
