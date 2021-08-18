import { useState } from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function Page() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <h1>To-do</h1>
      <TodoInput
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
      />
    </>
  );
}
