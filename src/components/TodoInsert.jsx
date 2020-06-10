import React, { useState } from 'react';

export default function TodoInsert({ onInsert }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    onInsert(value);
    setValue('');
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        name="todo"
        value={value}
        onChange={handleChange}
      />
      <button type="submit">추가</button>
    </form>
  );
}
