import React, { useState } from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

function TodoPage() {
  const [state, setState] = useState({
    todos: [],
    todoInput: '',
  });

  const handleChangeTodoInput = (event) => {
    setState({
      ...state,
      todoInput: event.target.value,
    });
  };

  const handleSubmitAddTodo = (event) => {
    event.preventDefault();

    const newId = state.todos.length === 0 ? 0 : state.todos.slice(-1)[0].id + 1;

    setState({
      todos: [
        ...state.todos,
        { id: newId, content: state.todoInput },
      ],
      todoInput: '',
    });
  };

  const handleClickDone = (id) => {
    setState({
      todos: state.todos.filter((todo) => todo.id !== id),
    });
  };

  return (
    <div>
      <h1>To-do</h1>
      <TodoInput
        todoInput={state.todoInput}
        onChangeTodoInput={handleChangeTodoInput}
        onSubmitAddTodo={handleSubmitAddTodo}
      />
      <TodoList todos={state.todos} onClickDone={handleClickDone} />
    </div>
  );
}

export default TodoPage;
