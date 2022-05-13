import React, { useState } from 'react';

import TodoTitle from './componenet/TodoTitle';
import TodoInput from './componenet/TodoInput';
import TodoList from './componenet/TodoList';
import isEmpty from './utils/Empty';

export default function App() {
  const [state, setState] = useState({
    title: '',
    todos: [],
    todoId: 0,
  });

  // const isEmpty = (arr) => arr.length === 0;

  const { title, todos, todoId } = state;

  function handleChangeInput(e) {
    setState({
      ...state,
      title: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setState({
      title: '',
      todos: [...todos, {
        id: todoId,
        text: title,
        done: false,
      }],
      todoId: todoId + 1,
    });
  }

  function handleClickDone(id) {
    setState({
      ...state,
      todos: todos.filter((todo) => todo.id !== id),
    });
  }

  return (
    <div>
      <TodoTitle>To-do</TodoTitle>
      <TodoInput
        title={title}
        onSubmit={handleSubmit}
        onChange={handleChangeInput}
      />
      <TodoList
        isEmpty={isEmpty}
        todos={todos}
        onClick={handleClickDone}
      />
    </div>
  );
}
