import React from 'react';

const isEmpty = (arr) => arr.length === 0;

const TodoArray = ({ todoArray, deleteTodo }) => {
  if (isEmpty(todoArray)) {
    return <p>할 일이 없어요!</p>;
  }
  return (
    <ol>
      {todoArray.map(({ id, text }) => (
        <li key={id}>
          {text}
          <button type="button" onClick={() => deleteTodo({ id })}>완료</button>
        </li>
      ))}
    </ol>
  );
};

export default TodoArray;
