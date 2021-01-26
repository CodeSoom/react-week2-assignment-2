import React, { useRef, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const nextId = useRef(todos.length + 1);

  function handleAddTodo(todo) {
    const newTodo = {
      id: nextId.current,
      content: todo,
    };

    setTodos((prevTodos) => (
      [...prevTodos, newTodo]
    ));

    nextId.current += 1;
  }

  function handleDeleteTodo(deleteTodoId) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== deleteTodoId));
  }

  return (
    <div>
      <h1>To-do</h1>
      <TodoForm handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default App;
