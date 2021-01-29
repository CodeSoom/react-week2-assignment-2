import React, { useState } from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function App() {
  const [userText, setUserText] = useState('');
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(0);

  const handleChangeInput = (e) => {
    setUserText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, {
      id: todoId,
      text: userText,
      done: false,
    }]);
    setUserText('');
    setTodoId(todoId + 1);
  };

  const handleClickDoneButton = (id) => {
    setTodos(todos.filter((todo) => (
      todo.id !== id
    )));
  };

  return (
    <>
      <h1>To-do</h1>
      <TodoForm
        userText={userText}
        onChange={handleChangeInput}
        onSubmit={handleSubmit}
      />
      <TodoList
        todos={todos}
        onClick={handleClickDoneButton}
      />
    </>
  );
}
