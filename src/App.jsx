import React, { useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

export default function App() {
  const [state, setState] = useState([
    {
      id: 1,
      todo: '자바스크립트 공부',
    },
    {
      id: 2,
      todo: '리액트 공부',
    },
    {
      id: 3,
      todo: '운동하기',
    },
  ]);
  const todos = state;

  return (
    <div>
      <h1>To-do</h1>
      <TodoInsert />
      <TodoList
        todos={todos}
      />
    </div>
  );
}
