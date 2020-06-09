import React from 'react';

export default function TodoTemplate({ todoList, onClick }) {
  return (
    <div>
      <button type="button" onClick={onClick}>추가</button>
      <ul>
        {todoList.map(({ key, data }) => <li key={key}>{data}</li>)}
      </ul>
    </div>
  );
}
