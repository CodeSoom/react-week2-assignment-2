import { useState } from 'react';

import InputTodo from './InputTodo';
import TodoList from './TodoList';

export default function App() {
  const [state, setState] = useState({
    inputText: '',
    todoList: [],
  });

  function handleInput(value) {
    setState({
      ...state,
      inputText: value,
    });
  }

  function handleAdooTodo() {
    const { inputText, todoList } = state;
    setState({
      ...state,
      todoList: [...todoList, { id: Math.random(), contents: inputText }],
    });
  }

  function handleDeleteTodo(id) {
    const { todoList } = state;
    setState({
      ...state,
      todoList: todoList.filter((todo) => todo.id !== id),
    });
  }

  return (
    <div>
      <h1>To-do</h1>
      <InputTodo state={state} onChange={handleInput} onClick={handleAdooTodo} />
      <TodoList state={state} onClick={handleDeleteTodo} />
    </div>
  );
}
