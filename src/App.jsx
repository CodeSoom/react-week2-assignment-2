import React, { useState } from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function App() {
  const [state, setState] = useState({
    todo: '',
    todoList: [],
  });

  const { todo, todoList } = state;

  function handleClickAddTodo() {
    if (todo === '') {
      return
    }

    setState({
      todo: '',
      todoList: [...todoList, todo],
    });
  }

  function handleChangeText(value) {
    setState({
      ...state,
      todo: value,
    });
  }

  const handleClickRemoveTodo = (key) => {
    setState({
      ...state,
      todoList: todoList.filter((todoItem) => todoItem !== key),
    });
  };

  return (
    <div>
      <p>To-do</p>
      <TodoInput
        todo={todo}
        onChangeText={handleChangeText}
        onClickAddTodo={handleClickAddTodo}
      />
      <TodoList
        todoList={todoList}
        onClickRemoveTodo={handleClickRemoveTodo}
      />
    </div>
  );
}
