import React, { useState } from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function App() {
  const [todo, setTodo] = useState('');
  const [todoItems, setTodoItems] = useState([]);

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!todo) {
      return;
    }

    setTodo('');
    setTodoItems([
      ...todoItems,
      {
        id: todoItems.length,
        value: todo,
      },
    ]);
  };

  const handleClickRemoveButton = (id) => {
    setTodoItems(
      todoItems.filter((item) => item.id !== id),
    );
  };

  return (
    <>
      <h1>To-do</h1>
      <TodoForm
        value={todo}
        onChange={handleInputChange}
        onSubmit={handleFormSubmit}
      />
      <TodoList
        todoItems={todoItems}
        onClick={handleClickRemoveButton}
      />
    </>
  );
}
