import React from 'react';

export default function TodoList({ todos, handleComplete }) {
  return (
    <>
      {!todos.length && <p>할 일이 없어요!</p>}
      <ol>
        {todos.map((todoItem) => (
          <li key={todoItem.id}>
            {todoItem.text}
            <button type="button" onClick={() => handleComplete(todoItem.id)}>완료</button>
          </li>
        ))}
      </ol>
    </>
  );
}
