import React, { useState } from 'react';
import Todopage from './pages/Todopage';

function App() {
  const [state, setState] = useState({
    inputText: '',
    todos: [],
  });

  const { inputText, todos } = state;

  function handleAddClick(value) {
    if (value !== '') {
      setState({
        inputText: '',
        todos: [...todos, value],
      });
    }
  }

  function handleCompleteClick(value) {
    setState({
      inputText,
      todos: todos.filter((_, index) => index !== value),
    });
  }

  function handleChange(event) {
    setState({
      inputText: event.target.value,
      todos,
    });
  }

  return (
    <Todopage
      inputText={inputText}
      todos={todos}
      addClick={handleAddClick}
      completeClick={handleCompleteClick}
      handleChange={handleChange}
    />
  );
}

export default App;
