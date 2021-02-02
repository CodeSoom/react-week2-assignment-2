import React, { useState } from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function App() {
  const [state, setState] = useState({
    title: '',
    todoItems: [],
  });

  const { title, todoItems } = state;

  function handleChangeTitle(value) {
    setState({
      ...state,
      title: value,
    });
  }

  function handleClickAddTodo() {
    setState({
      title: '',
      todoItems: [...todoItems, { id: new Date(), content: title }],
    });
  }

  function handleClickDelete(id) {
    setState({
      ...state,
      todoItems: todoItems.filter((todoItem) => todoItem.id !== id),
    });
  }

  return (
    <div>
      <p>To do list</p>
      <TodoForm
        title={title}
        onChangeTitle={handleChangeTitle}
        onClickAddTodo={handleClickAddTodo}
      />
      <TodoList
        todoItems={todoItems}
        onClickDelete={handleClickDelete}
      />
    </div>
  );
}
