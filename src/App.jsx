import { useState } from 'react';

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 시작',
    },
    {
      id: 2,
      text: '컴포넌트 이해',
    },
    {
      id: 3,
      text: '투두리스트 만들기',
    },
  ]);
  const [text, setText] = useState('');

  function handleAddClick() {
    setTodos([
      ...todos,
      {
        id: 0,
        text: '',
      }
    ])
  }

  const todoLists = todos.map(todo =>
    <li key={todo.id}>
      {todo.text}
      <button type="button">
        완료
      </button>
    </li>
  );

  return (
    <div>
      <h1>To-do</h1>

      <input></input>
      <button onClick={handleAddClick}>
        추가
      </button>

      <ol>{todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button type="button">
            완료
          </button>
        </li>
      ))}</ol>
  </div>
  );
}
