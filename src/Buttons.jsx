import React from 'react';

const Buttons = ({ todos, deleteTodoList }) => (
  <ol>
    {todos.map((todo) => (
      <li key={todo.id}>
        <p>{todo?.content}</p>
        <button type="button" onClick={() => deleteTodoList(todo.id)}>완료</button>
      </li>
    ))}
  </ol>
);

export default Buttons;
