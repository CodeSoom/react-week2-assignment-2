import React, { useState } from 'react';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [state, setState] = useState({
    typingValue: '',
    items: [],
  });
  const { typingValue, items } = state;

  function handleChange(value) {
    setState({
      ...state,
      typingValue: value,
    });
  }

  function handleClickTodoAdd() {
    if (items.includes(typingValue)) return;

    setState({
      items: [...items, typingValue],
      typingValue: '',
    });
  }

  function handleClickTodoComplete(value) {
    setState({
      ...state,
      items: items.filter((item) => item !== value),
    });
  }

  return (
    <div>
      <h1>To-do</h1>
      <p>
        <TodoInput
          value={typingValue}
          onChange={handleChange}
          onClick={handleClickTodoAdd}
        />
      </p>
      <TodoList
        items={items}
        onClick={handleClickTodoComplete}
      />
    </div>
  );
}

export default App;
