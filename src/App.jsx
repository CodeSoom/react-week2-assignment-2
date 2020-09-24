import React, { useState } from 'react';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [state, setState] = useState({
    input: '',
    todoList: [],
  });
  const { input, todoList } = state;

  function handleChange(value) {
    setState({
      ...state,
      input: value,
    });
  }

  function handleClickTodoAdd() {
    setState({
      todoList: todoList.indexOf(input) === -1 ? [...todoList, input] : todoList,
      input: '',
    });
  }

  function handleClickTodoComplete(value) {
    setState({
      ...state,
      todoList: todoList.filter((item) => item !== value),
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
        list={todoList}
        onClick={handleClickTodoComplete}
      />
    </div>
  );
}

export default App;
