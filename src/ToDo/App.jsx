import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Form from './Form';
import Todos from './Todos';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  function handleChangeInput(e) {
    setInputText(e.target.value);
  }

  // Todo : 혹시나 직접 구현할 때는 util파일 만들어서 관리!
  // function uuidv4() {
  // return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11)
  //   .replace(/[018]/g, (c) => ((c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15) >> c / 4)
  //     .toString(16));
  // }

  function handleClickAddButton(e) {
    e.preventDefault();
    setTodos([...todos, { id: uuidv4(), content: inputText }]);
    setInputText('');
  }

  function handleClickDeleteButton(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <h1>To-do</h1>
      <Form
        inputText={inputText}
        onChangeInput={handleChangeInput}
        onClickAddButton={handleClickAddButton}
      />
      {todos.length === 0 ? <p>할 일이 없어요!</p>
        : <Todos todos={todos} onClickDeleteButton={handleClickDeleteButton} />}
    </>
  );
}
