import React from 'react';

function User({ todo }) {
  return (
    <div>
      <p>{todo.id} {todo.todolist}</p> 
    </div>
  );
}

function TodoList({ todos }) {
  return (
    <div>
      {todos.map(todo => (
        <User todo={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default TodoList;
