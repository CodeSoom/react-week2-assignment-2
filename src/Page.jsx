/* eslint-disable react/prop-types */

import React from 'react';
import Title from './Title';
import TodoInput from './TodoInput';
import Todos from './Todos';

function Page({
  todos, todo, onChangeTodo, onAddTodo, onRemoveTodo,
}) {
  return (
    <div>
      <Title title="TODO-List" />
      <TodoInput todo={todo} onChangeTodo={onChangeTodo} onAddTodo={onAddTodo} />
      <br />
      <Todos todos={todos} onRemoveTodo={onRemoveTodo} />
    </div>
  );
}

export default Page;
