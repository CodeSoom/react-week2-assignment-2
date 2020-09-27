import React, { useState } from 'react';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [state, setState] = useState({
    currentItem: '',
    items: [],
  });
  const { currentItem, items } = state;

  function handleChange(value) {
    setState({
      ...state,
      currentItem: value,
    });
  }

  function handleClickTodoAdd() {
    if (items.includes(currentItem)) return;

    setState({
      items: [...items, currentItem],
      currentItem: '',
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
          value={currentItem}
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
