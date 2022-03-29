import { useState } from 'react';

export default function TodoInput({ onSubmit }) {
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button type="submit">추가</button>
    </form>
  );
}
