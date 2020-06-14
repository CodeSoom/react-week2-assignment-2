import React from 'react';
import TodoItem from './TodoItem';

function Todolist({ todos, onClickCompleteTodo }) {
  if (todos.length > 0) {
    return (
      todos.map((todo) => (
        <TodoItem
          todo={todo}
          onClickCompleteTodo={onClickCompleteTodo}
        />
      ))
    );
  }

  return (
    <p> 할 일이 없어요! </p>
  );
}

export default Todolist;
