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

  const onChangeValue = (e) => {
    setNewTodo(e.target.value);
  };

  const onClickTodoList = (index) => {
    const unFinishedTodo = [...todos];
    unFinishedTodo.splice(index, 1);
    setTodos(unFinishedTodo);
  };

  return (
    <>
      <h1>To-do</h1>
      <Form value={newTodo} onSubmit={addTodo} onChange={onChangeValue} />
      <List todos={todos} onClick={onClickTodoList} />
    </>
  );
};

export default Todo;
