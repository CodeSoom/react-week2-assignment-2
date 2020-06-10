import React, { useState } from 'react';

import Title from './components/Title';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList'
import EmptyMessage from './components/EmptyMessage';

export default function App() {
  const [todo, setTodo] = useState({ id: 1, text: '' });
  const [todos, setTodos] = useState([]);

  const handleTodoInput = (e) => {
    setTodo({ ...todo, text: e.target.value });
  };

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setTodos([...todos, todo]);
    setTodo({ id: todo.id + 1, text: '' });
  };

  const handleComplete = (index) => {
    setTodos(todos.filter((todoItem) => todoItem.id !== index));
  };

  return (
    <>
      <Title />
      <TodoInput
        handleTodoInput={handleTodoInput}
        handleTodoSubmit={handleTodoSubmit}
      />
      <EmptyMessage todos={todos} />
      <TodoList todos={todos} handleComplete={handleComplete} />
    </>
  );
}
