import { useState } from 'react';
import ToDoList from './ToDoList';

export default function App() {
  // const TodosInitialState = {
  //   id: null,
  //   text: '',
  // };

  const [text, setText] = useState('');
  const [todos, setTodos] = useState('');

  const onClick = () => {
    setTodos({ ...todos, text });
    // 현재 text를 todo 의 리스트 만들때 인자로 보내줘야함.
    setText('');
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const handleRemove = ({todo.id}) => {
    filter({todo.id} => )
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
