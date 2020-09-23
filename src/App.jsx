import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [state, setState] = useState({
    input: '',
    list: [],
  });
  const { input, list } = state;

  function handleChange(e) {
    setState({
      ...state,
      input: e.target.value,
    });
  }

  function handleClick() {
    setState({
      ...state,
      list: [...list, input],
      input: '',
    });
  }

  return (
    <div>
      <h1>To-do</h1>
      <p>
        <TodoInput
          value={input}
          onChange={handleChange}
          onClick={handleClick}
        />
      </p>
      <TodoList
        list={list}
      />
    </div>
  );
}

export default App;
