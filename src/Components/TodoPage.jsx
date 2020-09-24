import React, { useState } from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const handleChangeTodoInput = (event) => {
    setTodoInput(event.target.value);
  };

  const handleSubmitAddTodo = (event) => {
    event.preventDefault();

    const newId = todos.length === 0 ? 0 : todos.slice(-1)[0].id + 1;

    setTodos([
      ...todos,
      { id: newId, content: todoInput },
    ]);

    setTodoInput([]);
  };

  const handleClickDone = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>To-do</h1>
      <TodoInput
        todoInput={todoInput}
        onChangeTodoInput={handleChangeTodoInput}
        onSubmitAddTodo={handleSubmitAddTodo}
      />
      <TodoList todos={todos} onClickDone={handleClickDone} />
    </div>
  );
}

export default TodoPage;
