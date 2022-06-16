import { useState } from 'react';

export default function InputTodo({ onClick }) {
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') onClick(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        onKeyPress={handleEnter}
        placeholder="할 일을 입력해주세요."
      />
      <button
        type="button"
        onClick={() => onClick(newTodo)}
      >
        추가
      </button>
    </div>
  );
}
