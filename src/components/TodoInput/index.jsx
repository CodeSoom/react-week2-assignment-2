import { useState } from 'react';

const ToDoInput = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');
  const onClick = (text) => {
    addTodo(text);
    setInputValue('');
  };
  return (
    <div>
      <input
        onChange={({ target: { value } }) => setInputValue(value)}
        value={inputValue}
        type="text"
        placeholder="할 일을 입력해주세요"
      />
      <button onClick={() => onClick(inputValue)} type="button">
        추가
      </button>
    </div>
  );
};

export default ToDoInput;
