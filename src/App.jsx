import React from 'react';

import Title from './components/Title';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <>
      <Title title="To-do" />
      <TodoList />
    </>
  );
}
