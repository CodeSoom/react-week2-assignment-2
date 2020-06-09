import React from 'react';

import TodoAddButton from './TodoAddButton';

export default function TodoTemplate({ todoList, onClick }) {
  return (
    <div>
      <TodoAddButton onClick={onClick} />
      <ul>
        {todoList.map(({ key, data }) => <li key={key}>{data}</li>)}
      </ul>
    </div>
  );
}
