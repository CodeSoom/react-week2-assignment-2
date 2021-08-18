import { useState } from 'react';

import { v4 } from 'uuid';

export default function TodoInput({ todos, setTodos }) {
  const [todoContent, setTodoContent] = useState('');

  const handleOnChange = (event) => {
    setTodoContent(event.target.value);
  };

  const handleClick = () => {
    setTodos([
      ...todos,
      {
        id: v4(),
        content: todoContent,
      },
    ]);

    setTodoContent('');
  };

  return (
    <>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        onChange={handleOnChange}
        value={todoContent}
      />
      <button
        type="button"
        onClick={handleClick}
      >
        추가
      </button>
    </>
  );
}
