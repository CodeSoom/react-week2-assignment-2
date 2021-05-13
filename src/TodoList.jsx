import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, checkTodo }) => (
  <ol>
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} checkTodo={checkTodo} />
    ))}
  </ol>
);

export default TodoList;
