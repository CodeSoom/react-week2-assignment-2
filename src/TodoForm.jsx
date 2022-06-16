import { useState } from 'react';

export default function TodoForm({ onSubmit }) {
  const [todoTitle, setTodoTitle] = useState('');

  function clearTodoTitle() {
    setTodoTitle('');
  }

  function handleChangeTodoTitle(e) {
    setTodoTitle(e.target.value.trim());
  }

  function handleSubmit(e) {
    e.preventDefault();

    // @TODO alert로 변경하기
    if (!todoTitle) return;

    onSubmit(todoTitle);

    clearTodoTitle();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={todoTitle} onChange={handleChangeTodoTitle} />
      <button type="submit">추가</button>
    </form>
  );
}
