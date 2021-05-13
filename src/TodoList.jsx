import React from 'react';
import List from './List';
import TodoItem from './TodoItem';

export default function TodoList({ todos, deleteTodo, checkTodo }) {
  if (todos.length === 0) return <p>할 일이 없어요!</p>;
  return (
    <List tagName="ol">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          checkTodo={checkTodo}
        />
      ))}
    </List>
  );
}
