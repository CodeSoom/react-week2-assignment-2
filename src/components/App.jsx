import React, { useState } from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

const App = () => {
  const [todo, setTodo] = useState('');
  const [todoItems, setTodoItems] = useState([]);

  const handleInputChange = (e) => (
    setTodo(e.target.value)
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!todo) {
      return;
    }

    setTodo('');
    setTodoItems([
      ...todoItems,
      todo,
    ]);
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
      />
    </>
  );
};

export default App;
