import React, { useState } from 'react';
import TodoPage from './components/TodoPage';

export default function App() {
  const [state, setState] = useState({
    value: '',
    nextId: 1,
    todos: [],
  });
  const { value, nextId, todos } = state;

  const handleClickComplete = (id) => {
    setState({
      ...state,
      todos: [...todos].filter((todo) => todo.id !== id),
    });
  };

  const handleChangeInputValue = (e) => {
    setState({
      ...state,
      value: e.target.value,
    });
  };

  const handleClickAddTodo = (e) => {
    e.preventDefault();
    setState({
      value: '',
      nextId: nextId + 1,
      todos: [...todos, {
        id: nextId,
        todo: value,
      }],
    });
  };

  return (
    <TodoPage
      todos={todos}
      value={value}
      onChangeInputValue={handleChangeInputValue}
      onSubmitAddTodo={handleClickAddTodo}
      onClickRemoveTodo={handleClickComplete}
    />
  );
}
