import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoButton from './TodoButton';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  function addTodo() {
    setTodos([...todos, todoInput]);
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
        onClick={addTodo}
      />

      {todos.map((eachTodo, index) => (
        <div>
          {index + 1}
          .
          {eachTodo}
          <button type="button" onClick={removeTodo}>완료</button>
        </div>
      ))}
    </div>

  );
}
