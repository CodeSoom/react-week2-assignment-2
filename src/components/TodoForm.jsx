import React, { useState } from 'react';

export default function TodoForm({ setTodos }) {
  const [input, updateInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    function newId(list) {
      const ids = list.reduce((acc, item) => [...acc, ...Object.keys(item)], []);

      const id = Math.max(ids) + 1;

      return id;
    }

    setTodos((prev) => [...prev, { [newId(prev)]: input }]);
    updateInput('');
  }

  function handleChange(e) {
    const { value } = e.target;

    updateInput(value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        value={input}
        onChange={handleChange}
      />
      <button type="submit">
        추가
      </button>
    </form>
  );
}
