import React from 'react';

const TodoList = ({ todoList, deleteTodo }) => (todoList.length < 1 ? (
  <p>할 일이 없어요!</p>
) : (
  <ol>
    {todoList.map(({ id, text }) => (
      <li key={id}>
        {text}
        <button type="button" onClick={() => deleteTodo({ id })}>완료</button>
      </li>
    ))}
  </ol>
));

export default TodoList;
