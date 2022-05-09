import React, { useState } from 'react';

import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default function Todo() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  function createId() {
    if (todoList.length === 0) return 1;

    return todoList[todoList.length - 1].id + 1;
  }

  const handleAddTodoChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodoClick = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { id: createId(), data: todo }]);
    setTodo('');
  };

  const handleTodoListClick = ({ id }) => {
    setTodoList(todoList.filter((i) => i.id !== id));
  };

  return (
    <>
      <h1>To-do</h1>
      <AddTodo
        value={todo}
        onChange={handleAddTodoChange}
        onClick={handleAddTodoClick}
      />
      <TodoList todoList={todoList} onClick={handleTodoListClick} />
    </>
  );
}
