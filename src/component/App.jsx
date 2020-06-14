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

  function handleTodoCreate() {
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

  function handleInputChange(event) {
    const input = event.target.value;
    setState({
      ...state,
      todo: {
        id: '',
        text: input,
      },
    });
  }

  function deleteTodo(id) {
    setState({
      ...state,
      todos: todos.filter((element) => element.id !== id),
    });
  }

  function handleTodoDone(id) {
    deleteTodo(id);
  }

  return (
    <div>
      <Title />
      <InputPanel
        todo={todo}
        onInputChange={handleInputChange}
        onTodoCreate={handleTodoCreate}
      />
      <TodoList
        todos={todos}
        onTodoDone={handleTodoDone}
      />
    </div>
  );
}
