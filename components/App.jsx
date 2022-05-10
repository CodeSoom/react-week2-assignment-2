import React, { useState } from 'react';

import TodoForm from './TodoForm';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState('할 일이 없어요!');

  const handleInputChange = (e) => (
    setInputValue(e.currentTarget.value)
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setInputValue('');
    console.log(inputValue);
  };

  return (
    <>
      <h1>To-do</h1>
      <TodoForm
        value={inputValue}
        onChange={handleInputChange}
        onSubmit={handleFormSubmit}
      />
      <p>{todoList}</p>
    </>
  );
};

export default App;
