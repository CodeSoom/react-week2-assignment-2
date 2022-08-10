import { useState } from 'react';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);

  function handleInputValue({ target }) {
    setInputValue(target.value);
  }

  function handleClickAdd() {
    setList([...list, inputValue]);
    setInputValue('');
  }

  return (
    <div>
      <h1>To-do</h1>
      <form>
        <input
          type="inputValue"
          placeholder="할 일을 입력해 주세요"
          value={inputValue}
          onChange={handleInputValue}
        />
        <button
          type="button"
          onClick={() => handleClickAdd()}
        >
          추가
        </button>
      </form>
    </div>
  );
}
