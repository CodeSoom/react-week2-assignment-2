import { useState } from 'react';

function newId(list) {
  if (!list.length) {
    return 1;
  }

  const id = list[list.length - 1].id + 1;

  return id;
}

export default function TodoForm({ setTodos }) {
  const [input, updateInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    setTodos((todos) => [...todos, { id: newId(todos), value: input }]);
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
