import React, { useState, useCallback } from 'react';

import Title from './components/Title';
import TodoList from './components/TodoList';
import Form from './components/Form';

export default function () {
  const [state, setState] = useState({
    todos: [],
    value: '',
    isEmpty: false,
  });

  const { todos, value, isEmpty } = state;

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

  const onCompleteTodo = useCallback((id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setState({
      ...state,
      todos: filteredTodos,
    });
  }, [todos]);

  const onChange = (e) => {
    setState({
      ...state,
      value: e.target.value,
      isEmpty: false,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAddTodo();
  };

  return (
    <>
      <Title title="To-do" />
      <Form onSubmit={onSubmit} value={value} onChange={onChange} isEmpty={isEmpty} />
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
