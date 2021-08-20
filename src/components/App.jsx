import { useState, useRef } from 'react';

import Form from './Form';
import List from './List';

export default function App() {
  const [state, setState] = useState({
    inputTodo: '',
    todos: [],
  });

  const { inputTodo, todos } = state;

  const todoID = useRef(0);

  function handleSubmit(e) {
    e.preventDefault();
    setState({
      inputTodo: '',
      todos: [...todos,
        {
          id: todoID.current,
          text: inputTodo,
        }],
    });
    todoID.current += 1;
  }

  function handleChange({ target: { value } }) {
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
        onChange={handleChange}
        inputTodo={inputTodo}
      />
      <List
        todos={todos}
        onClick={handleDelete}
      />
    </div>
  );
}
