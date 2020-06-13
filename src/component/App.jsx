import React, { useState } from 'react';

import Title from './Title';
import InputPanel from './InputPanel';
import TodoList from './TodoList';

export default function App() {
  const [state, setState] = useState({
    todo: {
      id: '',
      text: '',
    },
    todos: [],
  });

  const { todo, todos } = state;

  function handleTodoAdd() {
    todos.push({
      ...todo,
      id: Date.now().toString(),
    });
    setState({
      todo: {
        id: '',
        text: '',
      },
      todos,
    });
  }

  function handleChangeInput(event) {
    const newText = event.target.value;
    setState({
      todo: {
        text: newText,
      },
      todos,
    });
  }

  function deleteTodo(id) {
    const newTodos = todos.filter((element) => element.id !== id);
    setState({
      ...state,
      todos: newTodos,
    });
  }

  function handleTodoDone(event) {
    const { id } = event.target;
    deleteTodo(id);
  }

  return (
    <div>
      <Title />
      <InputPanel
        todo={todo}
        handleChangeInput={handleChangeInput}
        handleTodoAdd={handleTodoAdd}
      />
      <TodoList
        todos={todos}
        handleTodoDone={handleTodoDone}
      />
    </div>
  );
}
