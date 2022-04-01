import { useState } from 'react';

export default function AddTodoForm({ addTodo }) {
  const [content, setContent] = useState('');

  const handleChange = ({ target: { value } }) => {
    setContent(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(content);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={content} onChange={handleChange} type="text" placeholder="할 일을 입력해 주세요" />
      <button type="submit">추가</button>
    </form>
  );
}
