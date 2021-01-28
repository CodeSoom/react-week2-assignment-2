import React, { useState } from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function App() {
  const [userForm, setUserForm] = useState('');
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(0);

  const handleChangeInput = (e) => {
    setUserForm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, {
      id: todoId,
      text: userForm,
      done: false,
    }]);
    setUserForm('');
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
        userInput={userForm}
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
