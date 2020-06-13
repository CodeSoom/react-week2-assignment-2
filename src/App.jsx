import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    note: '',
    todoList: [],
  });

  const todoItems = state;

  function handleClick() {
    const { todoList } = todoItems;
    todoList.push({
      task: todoItems.note,
    });

    setState({
      todoList,
    });

    todoItems.note = '';
  }

  function handleChange(e) {
    setState({
      note: e.target.value,
      todoList: todoItems.todoList,
    });
  }

  function handleConfirm(selectedItem) {
    const { todoList } = todoItems;
    const filteredList = todoList
      .filter((item) => (item !== selectedItem));

    setState({
      todoList: filteredList,
    });
  }

  return (
    <div>
      <Page
        todoItems={todoItems}
        onChangeWriteTodo={handleChange}
        onClickAddTodo={handleClick}
        onClickConfirm={handleConfirm}
      />
    </div>

  );
}
