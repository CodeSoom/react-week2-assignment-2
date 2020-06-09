import React, { useState } from 'react';

export default function App() {
  const [state, setState] = useState({
    todoList: [
      { data: '아무것도 안하기1', key: 1 },
      { data: '아무것도 안하기2', key: 2 },
    ],
  });

  const { todoList } = state;

  function handleClickAdd() {
    setState({
      todoList: todoList.concat(
        { data: '아무것도 안하기', key: todoList.length + 1 },
      ),
    });
  }

  return (
    <div>
      <button type="button" onClick={handleClickAdd}>추가</button>
      <ul>
        {todoList.map((todo) => <li key={todo.key}>{todo.data}</li>)}
      </ul>
    </div>
  );
}
