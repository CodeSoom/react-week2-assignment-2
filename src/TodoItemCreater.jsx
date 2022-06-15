import { useState } from 'react';

const TodoItemCreater = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChangeInput = (e) => setInputValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      // eslint-disable-next-line no-alert
      alert('할 일을 입력해 주세요!');
      return;
    }

    if (onSubmit) {
      onSubmit(inputValue);
    }
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={inputValue} placeholder="할 일을 입력해 주세요" onChange={handleChangeInput} />
      <button type="submit"> 추가 </button>
    </form>
  );
};

export default TodoItemCreater;
