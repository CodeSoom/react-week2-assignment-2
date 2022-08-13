import { useState } from 'react';

export default function App() {
  const [state, setState] = useState({
    newId: 100,
    todoTitle: '',
    todos: [
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
    ],
  });

  const { newId, todoTitle, todos } = state;

  const [text, setText] = useState('')

  function handleChangeTitle(e) {
    setState({
      ...state,
      todoTitle: e.target.value,
    });
  }

  function handleAddClick() {
    setState({
      ...state,
      newId: newId +1,
      todos: [...todos, { id: newId, text: todoTitle }],
    });
  }

  return (
    <div>
      <h1>To-do</h1>

      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        onChange={handleChangeTitle}
      />
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
