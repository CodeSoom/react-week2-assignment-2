import React, { useState } from 'react';
import Todopage from './pages/Todopage';

function App() {
  const [state, setState] = useState({
    inputText: '',
    todos: [],
  });

  const { inputText, todos } = state;

  function handleClickAddTodo(todo) {
    if (todo !== '') {
      setState({
        inputText: '',
        todos: [...todos, todo.trim()],
      });
    }
  }

  function handleClickCompleteTodo(position) {
    setState({
      inputText,
      todos: todos.filter((_, index) => index !== position),
    });
  }

  function handleInputChange(event) {
    setState({
      inputText: event.target.value,
      todos,
    });
  }

  return (
    <Todopage
      inputText={inputText}
      todos={todos}
      onClickAddTodo={handleClickAddTodo}
      onClickCompleteTodo={handleClickCompleteTodo}
      onChangeInputText={handleInputChange}
    />
  );
}

export default App;
