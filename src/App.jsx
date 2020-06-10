import React, { useState } from 'react';

import Title from './components/Title';
import TodoList from './components/TodoList';

export default function App() {
  const [state, setState] = useState({
    todos: [],
    value: '',
    isEmpty: false,
  });

  const { todos, value, isEmpty } = state;

  const onChange = (e) => {
    setState({
      ...state,
      value: e.target.value,
      isEmpty: false,
    });
  };

  const onAddTodo = () => {
    if (!value) {
      setState({
        ...state,
        isEmpty: true,
      });
      return;
    }
    setState({
      ...state,
      todos: [...state.todos, { id: new Date().getTime(), task: value }],
      value: '',
    });
  };

  const onCompleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setState({
      ...state,
      todos: filteredTodos,
    });
  };


  const onSubmit = (e) => {
    e.preventDefault();
    onAddTodo();
  };

  return (
    <>
      <Title title="To-do" />
      <TodoList
        value={value}
        onChange={onChange}
        onSubmit={onSubmit}
        isEmpty={isEmpty}
        todos={todos}
        onCompleteTodo={onCompleteTodo}
      />
    </>
  );
}
