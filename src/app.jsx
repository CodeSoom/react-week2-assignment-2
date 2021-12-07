import React, { useState } from 'react';

import TodoAppender from './components/todo-appender';

function App() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(todoItemText) {
    const todoItem = {
      id: todos.length + 1,
      text: todoItemText,
    };

    setTodos([...todos, todoItem]);
  }

  return (
    <>
      <h1>To-do</h1>
      <TodoAppender onAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
