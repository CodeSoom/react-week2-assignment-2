import React, { useState } from 'react';
import TodoPage from './components/TodoPage';

export default function App() {
  const [state, setState] = useState({
    value: '',
    nextId: 1,
    todos: [],
  });
  const { value, nextId, todos } = state;

  const onInsert = (text) => {
    setState({
      ...state,
      value: '',
      nextId: nextId + 1,
      todos: todos.concat({
        id: nextId,
        todo: text,
      }),
    });
  };

  const onRemove = (id) => {
    setState({
      ...state,
      todos: [...todos].filter((todo) => todo.id !== id),
    });
  };

  const onChange = (e) => {
    setState({
      ...state,
      value: e.target.value,
    });
  };

  const onSubmit = (e) => {
    onInsert(value);
    e.preventDefault();
  };

  return (
    <TodoPage
      todos={todos}
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      onRemove={onRemove}
    />
  );
}
