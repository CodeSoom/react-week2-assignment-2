import { useState } from 'react';

const TodoForm = ({ onSubmit }) => {
  const [todoTitle, setTodoTitle] = useState('');

  const handleChange = (e) => {
    setTodoTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(todoTitle);
    setTodoTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        value={todoTitle}
        onChange={handleChange}
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;
