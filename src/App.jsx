import { useState } from 'react';

import Page from './components/Page';

export default function App() {
  const [state, setState] = useState({
    todoTitle: '',
    nextId: 1,
    todos: [],
  });

  const { todoTitle, nextId, todos } = state;

  function handleSubmitAddTodo(event) {
    event.preventDefault();

    if (todoTitle === '') {
      return;
    }

    const todoItem = {
      id: nextId,
      text: todoTitle,
    };

    setState({
      ...state,
      nextId: nextId + 1,
      todoTitle: '',
      todos: [...todos, todoItem],
    });
  }

  function handleClickDeleteTodo(todoId) {
    setState({
      ...state,
      todos: todos.filter((todo) => todo.id !== todoId),
    });
  }

  function handleChangeTitle({ target }) {
    setState({
      ...state,
      todoTitle: target.value,
    });
  }

  return (
    <Page
      todoTitle={todoTitle}
      onChangeTitle={handleChangeTitle}
      onSubmitAddTodo={handleSubmitAddTodo}
      todos={todos}
      onClickDeleteTodo={handleClickDeleteTodo}
    />
  );
}
