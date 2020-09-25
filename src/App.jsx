import React, { useState } from 'react';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [state, setState] = useState({
    todoInputValue: '',
    items: [],
  });
  const { todoInputValue, items } = state;

  function handleChange(value) {
    setState({
      ...state,
      todoInputValue: value,
    });
  }

  function handleClickTodoAdd() {
    if (items.includes(todoInputValue)) return;

    setState({
      items: [...items, todoInputValue],
      todoInputValue: '',
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
          value={todoInputValue}
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
