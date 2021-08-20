import { useState } from 'react';

import Form from './Form';
import List from './List';

export default function App() {
  const [state, setState] = useState({
    idRef: 0,
    inputTodo: '',
    todos: [],
  });

  const { idRef, inputTodo, todos } = state;

  function handleSubmit(e) {
    e.preventDefault();
    setState({
      idRef: idRef + 1,
      inputTodo: '',
      todos: [...todos,
        {
          id: idRef,
          text: inputTodo,
        }],
    });
  }

  function handleChangTodo(value) {
    setState({
      ...state,
      inputTodo: value,
    });
  }

  function handleDelete(id) {
    setState({
      ...state,
      todos: todos.filter((todo) => todo.id !== id),
    });
  }

  return (
    <div>
      <p>To-do</p>
      <Form
        onSubmit={handleSubmit}
        onChange={handleChangTodo}
        inputTodo={inputTodo}
      />
      <List
        todos={todos}
        onClick={handleDelete}
      />
    </div>
  );
}
