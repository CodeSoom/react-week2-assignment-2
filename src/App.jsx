import { useState } from 'react';
import ToDoList from './ToDoList';

export default function App() {
  // const TodosInitialState = {
  //   id: null,
  //   text: '',
  // };

  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const onClick = () => {
    setTodos([...todos, text]);
    setText('');
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const handleRemove = ({ id }) => {
    todos.filter((todo) => todo.id !== id);
  };

  return (
    <>
      <h1>To-do</h1>
      <input
        type="text"
        onChange={onChange}
        value={text}
        placeholder="할 일을 입력해 주세요"
      />
      <button
        name="DoneButton"
        type="button"
        onClick={onClick}
      >
        추가
      </button>
      <p>
        <ToDoList todos={todos} onClick={handleRemove} />
      </p>
    </>
  );
}
