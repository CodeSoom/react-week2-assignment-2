import { useRef } from 'react';

function TodoAppender({ onAddTodo }) {
  const inputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();

    const todoItemText = inputRef?.current.value;
    if (!todoItemText) {
      return;
    }

    onAddTodo(todoItemText);
    inputRef.current.value = '';
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="할 일을 입력해 주세요" ref={inputRef} />
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoAppender;
