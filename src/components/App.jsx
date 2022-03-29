import { useState } from 'react';

import TodoForm from './TodoForm';
import Todos from './Todos';
import Message from './Message';

export default function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <h1>
        To-do
      </h1>
      <TodoForm setTodos={setTodos} />
      {todos.length > 0 ? (
        <Todos todos={todos} setTodos={setTodos} />
      ) : (
        <Message />
      )}
    </>
  );
}
