import React from 'react';

export default function TodoList({ todoList, OnCompleteTodo }) {
  function handleClickComplete(completeIndex) {
    OnCompleteTodo(completeIndex);
  }

  return (
    <ol>
      {todoList.map((todo, index) => (
        <li key={`todo-${index}}`}>
          {todo}
          <button
            type="button"
            key={`button-${index}}`}
            onClick={() => handleClickComplete(index)}
          >
            완료
            {index}
          </button>
        </li>
      ))}
    </ol>
  );
}
