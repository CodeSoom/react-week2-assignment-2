import { useState, useRef } from 'react';

import Form from './Form';
import List from './List';

export default function App() {
  const [state, setState] = useState({
    input: '',
    todos: [],
  });

  const { input, todos } = state;

  const todoID = useRef(0);

  function handleSubmit(e) {
    e.preventDefault();
    setState({
      input: '',
      todos: [...todos,
        {
          id: todoID.current,
          text: input,
        }],
    });
    todoID.current += 1;
  }

  function handleChange(e) {
    setState({
      ...state,
      input: e.target.value,
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
        onChange={handleChange}
        input={input}
      />
      <List
        todos={todos}
        onClick={handleDelete}
      />
    </div>
  );
}
