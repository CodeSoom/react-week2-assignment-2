import React from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <div>
      <h1>To-do</h1>
      <TodoInsert />
      <TodoList />
    </div>
  );
}
