import React from 'react';

function Todolist({ todos, onClickCompleteTodo }) {
  if (todos.length > 0) {
    return (
      todos.map((todo) => (
        <p>
          {todo.text}
          <button type="button" onClick={() => onClickCompleteTodo(todo.id)}>완료</button>
        </p>
      ))
    );
  }

  return (
    <p> 할 일이 없어요! </p>
  );
}

export default Todolist;
