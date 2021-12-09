import { useState } from 'react';

function TodoAppender({ onAddTodo }) {
  const [todoText, setTodoText] = useState('');

  function handleChange({ target }) {
    setTodoText(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!todoText) {
      return;
    }

    onAddTodo(todoText);
    setTodoText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        value={todoText}
        onChange={handleChange}
      />
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoAppender;
