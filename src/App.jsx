import React, { useState } from 'react';

import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

export default function App() {
  const [userInput, setUserInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(0);

  const handleChangeInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, {
      id: todoId,
      text: userInput,
      done: false,
    }]);
    setUserInput('');
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
      <TodoInsert
        userInput={userInput}
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
