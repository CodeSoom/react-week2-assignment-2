import { useState } from 'react';

import Form from './Form';
import List from './List';

export default function App() {
  const [state, setState] = useState({
    currentId: 0,
    inputTodo: '',
    todos: [],
  });

  const { currentId, inputTodo, todos } = state;

  function handleSubmit(e) {
    e.preventDefault();
    setState({
      currentId: currentId + 1,
      inputTodo: '',
      todos: [...todos,
        {
          id: currentId,
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
