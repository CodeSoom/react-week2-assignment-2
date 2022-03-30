import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');

  const onClick = (e) => {
    // TODO: 클릭시 todo list 추가 해야함.
    setText('');
    e.preventDefault();
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <h1>To-do</h1>
      <input type="text" onChange={onChange} value={text} placeholder="할 일을 입력해 주세요" />
      <button type="submit" onClick={onClick}>추가</button>
    </>
  );
}
