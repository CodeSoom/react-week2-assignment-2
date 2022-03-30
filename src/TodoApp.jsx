import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoButton from './TodoButton';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  function onChangeTodoInput(event) {
    setTodoInput(event.target.value);
  }

  function addTodo() {
    setTodos(
      todos.push(todoInput),
    );
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
    </div>

  );
}
