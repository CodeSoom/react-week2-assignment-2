import { useState } from 'react';

export default function App() {
  const [value, setValue] = useState('');

  const onClick = (e) => {
    // TODO: 클릭시 todo list 추가 해야함.
    e.preventDefault();
  };

  const onChange = (e) => {
    setValue({
      ...value,
      value: e.target.value,
    });
  };

  return (
    <>
      <h1>To-do</h1>
        <input onChange={onChange} placeholder="할 일을 입력해 주세요" />
        <button onClick={onClick}>추가</button>
    </>
  );
}
