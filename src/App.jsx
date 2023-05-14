import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoLists from './components/TodoLists';

export default function App() {
  const [newOrUpdateTodo, setNewOrUpdateTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: nanoid(6), text: newOrUpdateTodo }]);
    setNewOrUpdateTodo('');
  };

  const handleChange = (e) => {
    setNewOrUpdateTodo(e.target.value);
  };

  const handleClickComplete = (clickedItemID) => {
    setTodos(todos.filter((item) => item.id !== clickedItemID));
  };

  return (
    <div>
      <Header />
      <TodoForm
        newOrUpdateTodo={newOrUpdateTodo}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
      <TodoLists todos={todos} onClickComplete={handleClickComplete} />
    </div>
  );
}
