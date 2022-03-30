import { useState } from 'react';

export default function App() {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {

  };

  const handleChange = (e) => {

  };

  return (
    <>
      <form onSubmit={() => handleSubmit}>
        <label>
          hi:
          <textarea value={setValue} onChange={() => handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
