import { useState } from 'react';

const TodoForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        value={title}
        onChange={handleChange}
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;
