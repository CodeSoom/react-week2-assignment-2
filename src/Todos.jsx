import React from 'react';
import TodoList from './TodoList';

const Buttons = ({ todos, deleteTodoList }) => (
  <ol>
    {todos.map((todo) => (
      <TodoList key={todo.id} todo={todo} deleteTodoList={deleteTodoList} />
    ))}
  </ol>
);

export default Buttons;
