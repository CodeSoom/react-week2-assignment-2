import React, { useState } from 'react';

import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

export default function App() {
  const [userInput, setUserInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(0);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos(todos.concat({
      id: todoId,
      text: userInput,
      done: false,
    }));
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
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {todos.length === 0
        ? '할 일이 없어요!'
        : (
          <TodoList
            todos={todos}
            onClick={handleClickDoneButton}
          />
        )}
    </>
  );
}
