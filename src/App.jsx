import React, { useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: '자바스크립트 공부',
      checked: false,
    },
    {
      id: 2,
      todo: '리액트 공부',
      checked: false,
    },
    {
      id: 3,
      todo: '운동하기',
      checked: false,
    },
  ]);

  const onInsert = (value) => {
    setTodos([
      ...todos,
      {
        id: 4,
        todo: value,
        checked: false,
      },
    ]);
  };

  return (
    <div>
      <h1>To-do</h1>
      <TodoInsert
        onInsert={onInsert}
      />
      <TodoList
        todos={todos}
      />
    </div>
  );
}
