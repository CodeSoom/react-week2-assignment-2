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

  function handleClickTodoAdd() {
    setState({
      list: list.indexOf(input) === -1 ? [...list, input] : list,
      input: '',
    });
  }

  function handleClickTodoComplete(value) {
    const targetIndex = list.indexOf(value);

    setState({
      ...state,
      list: [
        ...list.slice(0, targetIndex),
        ...list.slice(targetIndex + 1, list.length),
      ],
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
