import { useState } from 'react';

import Form from './Form';
import List from './List';

const Todo = () => {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();

    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
    setNewTodo('');
  };

  const changeNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const removeTodo = (index) => {
    const unFinishedTodo = [...todos];
    unFinishedTodo.splice(index, 1);
    setTodos(unFinishedTodo);
  };

  return (
    <>
      <h1>To-do</h1>
      <Form value={newTodo} onSubmit={addTodo} onChange={changeNewTodo} />
      <List todos={todos} onClick={removeTodo} />
    </>
  );
};

export default Todo;
