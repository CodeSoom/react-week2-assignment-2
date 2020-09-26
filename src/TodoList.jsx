import React from 'react';

function User({ todo,onRemove }) {
  return (
    <div>
      <p>{todo.id} {todo.todolist}
      <button onClick={() => onRemove(todo.id)}>완료</button></p>

    </div>
  );
}

function TodoList({ todos,onRemove }) {
  return (
    <div>
      {todos.map(todo => (
        <User 
         todo={todo}
         key={todo.id}
         onRemove={onRemove}
         />
      ))}
    </div>
  );
}

export default TodoList;
