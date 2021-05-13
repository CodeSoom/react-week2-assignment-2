import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodoList, checkTodo }) => (
  <ol>
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} deleteTodoList={deleteTodoList} checkTodo={checkTodo} />
    ))}
  </ol>
);

export default TodoList;
