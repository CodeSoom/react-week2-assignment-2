import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Todopage from './pages/Todopage';

function App() {
  const [state, setState] = useState({
    inputText: '',
    todos: [],
  });

  const { inputText, todos } = state;

  function handleAddClick(value) {
    setState({
      inputText: '',
      todos: [...todos, value],
    });
  }

  function handleChange(event) {
    // event.preventDefault(); // prevent to reload page
    setState({
      inputText: event.target.value,
      todos,
    });
  }

  console.log('todos :', todos);

  return (
    <Todopage
      inputText={inputText}
      todos={todos}
      addClick={handleAddClick}
      handleChange={handleChange}
    />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
