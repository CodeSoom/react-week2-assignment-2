import React, { useState } from 'react';

export default function TodoForm({ onClickAdd }) {
  const [inputValue, setValue] = useState('');

  function handleChange(event) {
    const { target: { value } } = event;

    setValue(value);
  }

  function handleClickAdd() {
    onClickAdd(inputValue);
    setValue('');
  }

  return (
    <form>
      <input
        type="text"
        placeholder="할 일을 입력해주세요."
        value={inputValue}
        onChange={handleChange}
      />
      <button type="button" onClick={handleClickAdd}>
        추가
      </button>
    </form>
  );
}
