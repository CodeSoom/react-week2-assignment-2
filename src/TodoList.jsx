import React from 'react';
import EmptyTodoList from './EmptyTodoList';
import List from './List';
import TodoItem from './TodoItem';

export default function TodoList({ todos, deleteTodo, checkTodo }) {
  if (todos.length === 0) return <EmptyTodoList>할 일이 없어요!</EmptyTodoList>;
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
