import React, { useState } from 'react';

import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import TodoTemplate from './components/TodoTemplate';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };

  const onInsert = (value) => {
    const item = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      value,
    };

    setTodos([...todos, item]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(todo);
    setTodo('');
  };

  const handleRemoveTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <TodoTemplate>
      <TodoInsert onChange={handleOnChange} onSubmit={onSubmit} todo={todo} />
      <TodoList todos={todos} onRemove={handleRemoveTodo} />
    </TodoTemplate>
  );
}

export default App;
