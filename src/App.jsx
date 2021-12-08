import { useState } from 'react';

import TodoAppender from './components/TodoAppender';
import Todos from './components/Todos';

function getNextId(todos) {
  return todos.length
    ? Math.max(...todos.map((todo) => todo.id)) + 1
    : 1;
}

function App() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(todoItemText) {
    const todoItem = {
      id: getNextId(todos),
      text: todoItemText,
    };

    setTodos([...todos, todoItem]);
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  return (
    <>
      <h1>To-do</h1>
      <TodoAppender onAddTodo={handleAddTodo} />
      <Todos todos={todos} onDeleteTodo={handleDeleteTodo} />
    </>
  );
}

export default App;
