import React, { useState } from 'react';
import TodoPage from './components/TodoPage';

export default function App() {
  const [state, setState] = useState({
    value: '',
    nextId: 1,
    todos: [],
  });
  const { value, nextId, todos } = state;

  const insertTodoItem = (text) => {
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

  const handleClickCompleteButton = (id) => {
    setState({
      ...state,
      todos: [...todos].filter((todo) => todo.id !== id),
    });
  };

  const handleChangeInputText = (e) => {
    setState({
      ...state,
      value: e.target.value,
    });
  };

  const handleClickSubmitButton = (e) => {
    insertTodoItem(value);
    e.preventDefault();
  };

  return (
    <TodoPage
      todos={todos}
      value={value}
      onChange={handleChangeInputText}
      onSubmit={handleClickSubmitButton}
      onRemove={handleClickCompleteButton}
    />
  );
}
