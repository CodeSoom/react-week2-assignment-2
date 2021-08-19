import { useState } from 'react';

import TodoInputField from './TodoInputField';
import TodoList from './TodoList';

export default function Page() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <h1>To-do</h1>
      <TodoInputField
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
