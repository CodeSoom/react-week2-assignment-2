import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoButton from './TodoButton';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  function handleAddTodo() {
    setTodos([...todos, todoInput]);
  }

  function handleRemoveTodo(index) {
    setTodos(todos.filter((todo, todoIndex) => index !== todoIndex));
  }

  function onChangeTodoInput(event) {
    setTodoInput(event.target.value);
  }

  return (
    <div>
      <h1>To-do</h1>
      <TodoInput
        onChange={onChangeTodoInput}
        value={todoInput}
      />
      <TodoButton
        onClick={handleAddTodo}
      />

      {todos.map((eachTodo, index) => (
        <div>
          {index + 1}
          .
          {eachTodo}
          <button type="button" id={index} onClick={() => handleRemoveTodo(index)}>완료</button>
        </div>
      ))}
    </div>

  );
}
