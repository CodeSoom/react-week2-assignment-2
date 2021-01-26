import React, { useState } from 'react';

import TodoInsert from './TodoInsert';

export default function App() {
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>To-do</h1>
      <TodoInsert
        userInput={userInput}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {userInput}
    </>
  );
}
