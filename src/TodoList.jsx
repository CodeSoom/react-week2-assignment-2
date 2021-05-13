import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, checkTodo }) => {
  if (todos.length === 0) return <p>할 일이 없어요!</p>;
  return (
    <ol>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          checkTodo={checkTodo}
        />
      ))}
    </ol>
  );
};

export default TodoList;
