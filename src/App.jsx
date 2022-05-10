import React, { useState } from 'react';
import TodoInput from './componenet/TodoInput';
import TodoList from './componenet/TodoList';
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
        done: false,
      }],
      todoId: todoId + 1,
    });
  }

  function handleClickDone(id) {
    setState({
      ...state,
      todos: todos.filter((todo) => todo.id !== id),
    });
  }

  return (
    <div>
      <TodoTitle>To-do</TodoTitle>
      <TodoInput
        todoInput={todoInput}
        onSubmit={handleSubmit}
        onChange={handleChangeInput}
      />
      <TodoList
        todos={todos}
        onClick={handleClickDone}
      />
    </div>
  );
}

export default App;
