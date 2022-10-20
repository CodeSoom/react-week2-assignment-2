import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';

function App() {
  const [todos, setTodos] = useState([]);
  const [values, setValues] = useState({
    id: null,
    content: '',
  });

  function deleteTodoButton(todoId) {
    setTodos(todos.filter((item) => item.id !== todoId));
  }

  function handleChange(e) {
    setValues(e.target.value);
  }

  function handleTodoSubmit() {
    setTodos(
      [...values,
        {
          id: Date.now(),
          content: values.content,
        }],
    );
    setValues('');
  }

  console.log('setValues', setValues);
  console.log('setTodos', setTodos);
  console.log('todos', todos);
  console.log('values', values);

  return (
    <div>
      <Page
        values={values}
        handleChange={handleChange}
        onSubmit={handleTodoSubmit}
        todos={todos}
        onClick={deleteTodoButton}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
