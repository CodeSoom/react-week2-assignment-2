import React, { useState } from 'react';
import TodoInput from './componenet/TodoInput';
import TodoTitle from './componenet/TodoTitle';

function App() {
  const [state, setState] = useState({
    todoInput: '',
    todos: [],
    todoId: 0,
  });

  const { todoInput, todos, todoId } = state;

  function handleChangeInput(e) {
    setState({
      ...state,
      todoInput: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setState({
      todoInput: '',
      todos: [...todos, {
        id: todoId,
        text: todoInput,
      }],
      todoId: todoId + 1,
    });
  }

  console.log(Object);
  return (
  // onSubmit={}
  // value={}
  // onChange={}
    <div>
      <TodoTitle>To-do</TodoTitle>
      <TodoInput
        todoInput={todoInput}
        onSubmit={handleSubmit}
        onChange={handleChangeInput}
      />
    </div>
  );
}

export default App;
