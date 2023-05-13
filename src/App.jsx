import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoLists from './components/TodoLists';

export default function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: nanoid(6), text: newTodo }]);
    setNewTodo('');
  };

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleClickComplete = (clickedItemID) => {
    setTodos(todos.filter((item) => item.id !== clickedItemID));
  };

  return (
    <div>
      <Header />
      <TodoForm
        newTodo={newTodo}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
      <TodoLists
        hasTodos={todos.length}
        todos={todos}
        onClickComplete={handleClickComplete}
      />
    </div>
  );
}
