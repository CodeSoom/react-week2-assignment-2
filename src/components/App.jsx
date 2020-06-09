import React, { useState } from 'react';

export default function App() {
  const [state, setState] = useState({
    todoList: ['아무것도 안하기1', '아무것도 안하기2'],
  });

  const { todoList } = state;

  return (
    <div>
      <button type="button">추가</button>
      <ul>
        {todoList.map((todo) => <li>{todo}</li>)}
      </ul>
    </div>
  );
}
