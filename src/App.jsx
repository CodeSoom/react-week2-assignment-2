import { useState } from 'react';

import Field from './Field';
import Todos from './Todos';

export default function App() {
  const [state, setState] = useState({
    newId: 0,
    newTodo: '',
    todos: [],
  });

  const { newId, newTodo, todos } = state;

  function addTodo() {
    setState({
      ...state,
      newId: newId + 1,
      newTodo: '',
      todos: [...todos, { id: newId, text: newTodo }],
    });
  }

  function deleteTodo(id) {
    setState({
      ...state,
      todos: todos.filter((item) => item.id !== id),
    });
  }

  function handleChange(event) {
    setState({
      ...state,
      newTodo: event.target.value,
    });
  }

  return (
    <div>
      <h1>To-do</h1>
      <div>
        <Field
          newTodo={newTodo}
          onChange={handleChange}
          onClick={addTodo}
        />
        <Todos
          todos={todos}
          onClick={deleteTodo}
        />
      </div>
    </div>
  );
}
