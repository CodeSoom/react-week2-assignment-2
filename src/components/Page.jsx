import React from 'react';
import TodoTitle from './components/TodoTitle';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';

function Page() {
  return (
    <div>
      <TodoTitle />
      <TodoAdd />
      <TodoList />
    </div>
  );
}

export default Page;
