import React, { useState } from 'react';

import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';
import TodoInsertContainer from './containers/TodoInsertContainer';

function App() {
  const [todos, setTodos] = useState([]);

  const onInsert = (item) => {
    const todo = {
      id: !todos.length ? 1 : todos[todos.length - 1].id + 1,
      item,
    };

    setTodos(todos.concat(todo));
  };

  const onRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoTemplate>
      <TodoInsertContainer onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemoveTodo} />
    </TodoTemplate>
  );
}

export default App;
