import React from 'react';

export default function TodoList({ array = [], handleClickDone }) {
  if (array.length === 0) {
    return <p>할 일이 없어요!</p>;
  }

  return (
    <ol>
      {array.map((item) => (
        <li key={item}>
          {item}
          <button
            type="button"
            onClick={() => handleClickDone(item)}
          >
            완료
          </button>
        </li>
      ))}
    </ol>
  );
}
