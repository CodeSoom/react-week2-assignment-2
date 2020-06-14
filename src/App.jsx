import React, { useState } from 'react';
import Page from './page/Page';

function App() {
  const [state, setState] = useState({
    todos: [],
    inputSentence: '',
  });

  const { todos, inputSentence } = state;

  function handleChangeInputSentence(value) {
    setState({
      todos,
      inputSentence: value,
    });
  }

  function generateId() {
    if (todos.length === 0) {
      return 0;
    }
    return Math.max(...todos.map((key) => key.id)) + 1;
  }

  function handleClickAdd() {
    const todoObject = {
      id: generateId(),
      sentence: inputSentence,
    };
    setState({
      todos: [...todos, todoObject],
      inputSentence: '',
    });
  }

  function handleClickDelete(id) {
    setState({
      todos: todos.filter((todo) => (todo.id !== id)),
      inputSentence,
    });
  }

  return (
    <div>
      <Page
        todos={todos}
        inputSentence={inputSentence}
        onChangeInputSentence={handleChangeInputSentence}
        onClickAdd={handleClickAdd}
        onClickDelete={handleClickDelete}
      />
    </div>
  );
}

export default App;
