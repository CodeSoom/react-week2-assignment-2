import React, { useState } from 'react';

import Title from './Title';
import AddTodo from './AddTodo';
import TodoList from './TodoList';


export default function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputTodo = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todo.trim() === '') {
      setTodo('');
      return;
    }

    setTodos([
      ...todos,
      {
        todo,
      },
    ]);
    setTodo('');
  };

  const handleRemoveTodo = (indexTodo) => {
    todos.splice(indexTodo - 1, 1);
    setTodos([...todos]);
  };

  return (
    <div>
      <Title />
      <AddTodo
        todo={todo}
        handleInputTodo={handleInputTodo}
        handleAddTodo={handleAddTodo}
      />
      <TodoList
        todos={todos}
        handleRemoveTodo={handleRemoveTodo}
      />
    </div>
  );
}
