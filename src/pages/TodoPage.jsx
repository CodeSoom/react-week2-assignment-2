import React, { useState } from 'react';
import TodoAppending from '../components/TodoAppending';
import TodoList from '../components/TodoList';

export default function TodoPage() {
 const [todos, setTodos] = useState([]);

 const handleAppend = (todo) => {
  setTodos((prev) => {
   return [...prev, todo];
  });
 };

 const handleComplete = (index) => {
  const result = [...todos];

  result.splice(index, 1);
  setTodos(result);
 };

 return (
  <main>
   <h1>Todo</h1>
   <TodoAppending onAppend={handleAppend} />
   <TodoList todos={todos} onComplete={handleComplete} />
  </main>
 );
}
