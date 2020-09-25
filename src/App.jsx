import React, { useState } from 'react';

import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import TodoTemplate from './components/TodoTemplate';

function App() {
  const [myTodos, setMyTodos] = useState({
    todos: [],
    todo: '',
  });

  const { todos, todo } = myTodos;

  const onInsert = (value) => {
    const item = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      value,
    };

    setMyTodos({
      todos: [...todos, item],
      todo: '',
    });
  };

  const handleRemoveTodo = (id) => {
    setMyTodos({
      todos: todos.filter((item) => item.id !== id),
      todo: '',
    });
  };

  const onChange = (value) => {
    setMyTodos({
      ...myTodos,
      todo: value,
    });
  };

  return (
    <TodoTemplate>
      <TodoInsert insert={onInsert} change={onChange} todo={todo} />
      <TodoList todos={todos} onRemove={handleRemoveTodo} />
    </TodoTemplate>
  );
}

export default App;
