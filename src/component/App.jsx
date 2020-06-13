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
    const newTodo = {
      ...todo,
      id: Date.now().toString(),
    };
    setState({
      todo: {
        id: '',
        text: '',
      },
      todos: [...todos, newTodo],
    });
  }

  function handleChangeInput(event) {
    const input = event.target.value;
    setState({
      ...state,
      todo: {
        text: input,
      },
    });
  }

  function deleteTodo(id) {
    const filteredTodos = todos.filter((element) => element.id !== id);
    setState({
      ...state,
      todos: filteredTodos,
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
