import React, { useState } from 'react';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [state, setState] = useState({
    input: '',
    list: [],
  });
  const { input, list } = state;

  function handleChange(value) {
    setState({
      ...state,
      input: value,
    });
  }

  function handleClickTodoAdd() {
    setState({
      list: list.indexOf(input) === -1 ? [...list, input] : list,
      input: '',
    });
  }

  function handleClickTodoComplete(value) {
    setState({
      ...state,
      list: list.filter((item) => item !== value),
    });
  }

  return (
    <div>
      <h1>To-do</h1>
      <p>
        <TodoInput
          value={input}
          onChange={handleChange}
          onClick={handleClickTodoAdd}
        />
      </p>
      <TodoList
        list={list}
        onClick={handleClickTodoComplete}
      />
    </div>
  );
}

export default App;
