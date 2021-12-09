import { useState } from 'react';

import Button from './Button';

export default function Input({ onClick }) {
  const [todo, setTodo] = useState('');
  function handleChange(input) {
    setTodo(input);
  }

  function handleClick() {
    onClick(todo);
    setTodo('');
  }

  return (
    <div>
      <input
        type="text"
        placeholder="할 일을 입력해주세요."
        value={todo}
        onChange={(event) => handleChange(event.target.value)}
      />

      <Button onClick={() => handleClick(todo, onClick)}>
        추가
      </Button>
    </div>
  );
}
