import React, { useState } from 'react';

import TodoInputBox from './TodoInputBox';
import TodoDisplay from './TodoDisplay';


export default function TodoContainer() {
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState([]);

  function updateTodoInput(todoContent) {
    setTodoInput(todoContent);
  }

  function appendTodo() {
    if (todoInput === '') {
      return;
    }
    setTodos([
      ...todos,
      {
        id: `${(new Date()).getTime()}`,
        content: todoInput,
      },
    ]);
    setTodoInput('');
  }

  function removeTodo(todoId) {
    const nextTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(nextTodos);
  }

  return (
    <div>
      <h1>To-Do</h1>
      <TodoInputBox
        todoInput={todoInput}
        handleChangeTodoInput={updateTodoInput}
        appendTodo={appendTodo}
      />
      <TodoDisplay
        todos={todos}
        handleClickFinishButton={removeTodo}
      />
    </div>
  );
}
