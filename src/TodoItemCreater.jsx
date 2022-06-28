import { useState } from 'react';

const TodoItemCreater = ({ onSubmit }) => {
  const [todoText, setTodoText] = useState('');

  const handleChangeInput = (e) => setTodoText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoText) {
      // eslint-disable-next-line no-alert
      alert('할 일을 입력해 주세요!');
      return;
    }

    if (onSubmit) {
      onSubmit(todoText);
    }
    setTodoText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={todoText}
        placeholder="할 일을 입력해 주세요"
        onChange={handleChangeInput}
      />
      <button type="submit"> 추가 </button>
    </form>
  );
};

export default TodoItemCreater;
