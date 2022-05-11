import React, { useState } from 'react';

import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default function Todo() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  function createId() {
    if (todos.length === 0) {
      return 1;
    }

    return todos[todos.length - 1].id + 1;
  }

  const handleAddTodoChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodoClick = () => {
    setTodos([...todos, { id: createId(), todo }]);
    setTodo('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodoClick();
    }
  };

  const handleTodoListClick = ({ id }) => {
    setTodos(todos.filter((i) => i.id !== id));
  };

  return (
    <>
      <h1>To-do</h1>
      <AddTodo
        value={todo}
        onChange={handleAddTodoChange}
        onKeyPress={handleKeyPress}
        onClick={handleAddTodoClick}
      />
      <TodoList todos={todos} onClick={handleTodoListClick} />
    </>
  );
}
