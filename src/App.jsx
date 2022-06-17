import React, { useState, useRef } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const onAddTodoItem = () => {
    if (inputRef.current.value === '') {
      alert('할 일을 입력해 주세요.');
      return;
    }

    const newItem = { id: Math.floor((Math.random() * 99999)), text: inputRef.current.value };
    setTodos((prevTodos) => ([...prevTodos, newItem]));
    inputRef.current.value = '';
  };

  const onRemoveTodoItem = (id) => {
    const filterTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(filterTodoList);
  };

  return (
    <>
      <p>To-do</p>
      <TodoInput inputRef={inputRef} onAddTodoItem={onAddTodoItem} />
      <TodoList todos={todos} onRemoveTodoItem={onRemoveTodoItem} />
    </>
  );
}

export default App;
