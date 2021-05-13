import React from 'react';
import TodoList from './TodoList';

const Todos = ({ todos, deleteTodoList, checkTodo }) => (
  <ol>
    {todos.map((todo) => (
      <TodoList key={todo.id} todo={todo} deleteTodoList={deleteTodoList} checkTodo={checkTodo} />
    ))}
  </ol>
);

export default Todos;
