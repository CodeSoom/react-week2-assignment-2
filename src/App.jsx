import React, { useEffect, useRef, useState } from 'react';
import Page from './Page';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const checkTodo = (id) => {
    todos.find((todo) => todo.id === id).done = !todos.find((todo) => todo.id === id).done;
    setTodos([...todos]);
  };

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  const addTodo = (e) => {
    if (!value.trim()) return;
    if (e.key && e.key !== 'Enter') return;

    setTodos([...todos, {
      id: +(new Date()),
      content: value,
      done: false,
    }]);

    setValue('');
    inputRef.current.focus();
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));

    inputRef.current.focus();
  };

  return (
    <Page
      todos={todos}
      value={value}
      onChangeValue={onChangeValue}
      addTodo={addTodo}
      deleteTodo={deleteTodo}
      inputRef={inputRef}
      checkTodo={checkTodo}
    />
  );
}
