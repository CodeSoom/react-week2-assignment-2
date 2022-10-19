import React, { useState } from 'react';
import TodoPage from './TodoPage';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleSubmit = (todoItem) => {
    setTodoItems([
      ...todoItems, {
        id: Date.now(),
        todo: todoItem,
      },
    ]);
  };

  const handleDelete = (todoId) => {
    setTodoItems(
      todoItems.filter((item) => item.id !== todoId),
    );
  };

  return (
    <TodoPage
      onSubmit={handleSubmit}
      todoItems={todoItems}
      onClick={handleDelete}
    />
  );
}

export default App;
