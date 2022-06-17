/* eslint-disable no-alert */
import { useState } from 'react';

import Todos from './Todos';
import TodoForm from './TodoForm';

export default function App() {
  const [todos, setTodos] = useState([]);

  const [todoInput, setTodoInput] = useState('');

  function handleChangeTodoInput(e) {
    const input = e.target.value;

    setTodoInput(input);
  }

  function addTodo(todo) {
    const newTodos = [...todos, todo];

    setTodos(newTodos);
  }

  function handleSubmitTodoForm() {
    const title = todoInput.trim();

    if (!title) {
      alert('할 일을 입력해주세요!');
      return;
    }

    const todo = {
      id: Date.now(),
      title,
    };

    addTodo(todo);
    setTodoInput('');
  }

  return (
    <div>
      <h1>To-do</h1>

      <TodoForm
        todoInput={todoInput}
        onChange={handleChangeTodoInput}
        onSubmit={handleSubmitTodoForm}
      />

      <Todos todos={todos} />
    </div>
  );
}
