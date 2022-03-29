import { useState } from 'react';

import TodoForm from './TodoForm';
import Todos from './Todos';

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
        <p>
          할 일이 없어요!
        </p>
      )}
    </>
  );
}
