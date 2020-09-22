import React, { useState } from 'react';

export default function App() {
  const [state, setState] = useState({
    task: '',
  });

  const { task } = state;

  const handleChange = (e) => {
    setState({
      task: e.target.value,
    });
  };

  return (
    <div>
      <h1>To-do</h1>
      <form>
        <input
          type="text"
          placeholder="할 일을 입력해 주세요"
          value={task}
          onChange={handleChange}
        />
        <button type="submit">추가</button>
      </form>
      <p>
        {task}
      </p>
    </div>
  );
}
