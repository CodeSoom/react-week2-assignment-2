import React, { useState } from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoValue, setTodoValue] = useState('');

  function handleInput(value) {
    setTodoValue(value);
  }

  function handleAdd() {
    setTodoList([...todoList, { id: Date.now(), name: todoValue }]);
    setTodoValue('');
  }

  function handleDelete(todo) {
    const prevTodoList = [...todoList];
    const result = prevTodoList.filter((prevTodo) => prevTodo.id !== todo.id);
    setTodoList(result);
  }

  return (
    <>
      <h1>To-do</h1>
      <TodoInput
        inputValue={todoValue}
        onAdd={handleAdd}
        onInput={handleInput}
      />
      <TodoList todoList={todoList} onDelete={handleDelete} />
    </>
  );
}
