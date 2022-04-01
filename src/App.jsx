import { useState } from 'react';

import ToDoList from './ToDoList';

export default function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleClickAddButton = () => {
    setText('');
    setTodos([
      ...todos,
      {
        id: todos.length,
        value: text,
      },
    ]);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClickDoneButton = (id) => {
    setTodos(
      todos.filter((todo) => todo.id !== id),
    );
  };

  return (
    <>
      <h1>To-do</h1>
      <input
        type="text"
        name="todos-input"
        onChange={handleChange}
        value={text}
        placeholder="할 일을 입력해 주세요"
      />
      <button
        type="button"
        onClick={handleClickAddButton}
      >
        추가
      </button>
      <p>
        <ToDoList todos={todos} onClick={handleClickDoneButton} />
      </p>
    </>
  );
}
