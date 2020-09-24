import React, { useState } from 'react';

import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import TodoTemplate from './components/TodoTemplate';

function App() {
  const [todos, setTodos] = useState([]);

  const onInsert = (value) => {
    const todo = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      value,
    };

    setTodos([...todos, todo]);
  };

  const handleRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoTemplate>
      <TodoInsert insert={onInsert} />
      <TodoList todos={todos} onRemove={handleRemoveTodo} />
    </TodoTemplate>
  );
}

export default App;
