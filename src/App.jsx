import { useState } from 'react';

export default function App() {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    // TODO: todo list 추가 해야함.
    e.preventDefault();
  };

  const handleChange = (e) => {
    setValue({
      ...value,
      value: e.target.value,
    });
  };

  return (
    <>
      <h1>To-do</h1>
      <form onSubmit={() => handleSubmit}>
        <label>
          <textarea value={value} onChange={() => handleChange} />
        </label>
        <input type="submit" value="추가" />
      </form>
    </>
  );
}
