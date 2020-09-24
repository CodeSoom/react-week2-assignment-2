import React, { useState } from 'react';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [state, setState] = useState({
    todoInputValue: '',
    todoList: [],
  });
  const { todoInputValue, todoList } = state;

  function handleChange(value) {
    setState({
      ...state,
      todoInputValue: value,
    });
  }

  function handleClickTodoAdd() {
    setState({
      todoList: todoList.includes(todoInputValue)
        ? [...todoList, todoInputValue]
        : todoList,
      todoInputValue: '',
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
          value={todoInputValue}
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
