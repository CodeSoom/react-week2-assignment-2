import React from 'react';


export default function TodoDisplay({ todos, handleClickFinishButton }) {
  if (todos.length === 0) {
    return <p>할 일이 없어요!</p>;
  }
  return (
    <ol>
      {
        todos.map((todo) => (
          <li key={todo.id}>
            {todo.content}
            <button type="button" onClick={() => handleClickFinishButton(todo.id)}>
              완료
            </button>
          </li>
        ))
      }
    </ol>
  );
}
