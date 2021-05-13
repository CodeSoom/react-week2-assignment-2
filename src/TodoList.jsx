import React from 'react';
import EmptyTodoList from './EmptyTodoList';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, checkTodo }) => {
  if (todos.length === 0) return <EmptyTodoList>할 일이 없어요!</EmptyTodoList>;
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
