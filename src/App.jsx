import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [state, setState] = useState({
    todoTitle: '',
    todoItems: [],
  });

  const { todoTitle, todoItems } = state;

  function handleClickDeleteTodo(id) {
    const newTodoItems = todoItems.filter((item) => item.id !== id);
    setState({
      ...state,
      todoItems: newTodoItems,
    });
  }

  function handleSubmitAddTodo(event) {
    event.preventDefault();
    setState({
      todoTitle: '',
      todoItems: [...todoItems, { todo: todoTitle, id: new Date() }],
    });
  }

  function handleChangeTodoTitle(event) {
    setState({
      ...state,
      todoTitle: event.target.value,
    });
  }

  return (
    <Page
      todoItems={todoItems}
      todoTitle={todoTitle}
      onSubmitAddTodo={handleSubmitAddTodo}
      onClickDeleteTodo={handleClickDeleteTodo}
      onChangeTodoTitle={handleChangeTodoTitle}
    />
  );
}

export default App;
