import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function App() {
  const [text, setText] = useState('');
  function onChangeText(e) {
    setText(e.target.value);
  }

  const [submitText, setSubmitText] = useState([]);
  function onClickSubmit() {
    setSubmitText((prev) => ([...prev, text]));
    setText('');
  }

  function onClickFinish(t) {
    setSubmitText((prevTexts) => prevTexts.filter((prev) => prev !== t));
  }

  return (
    <>
      <TodoInput text={text} onChange={onChangeText} onClick={onClickSubmit} />
      <TodoList todoList={submitText} onClick={onClickFinish} />
    </>
  );
}
