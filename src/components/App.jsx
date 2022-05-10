import React, { useState } from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todoItem, setTodoItem] = useState('할 일이 없어요!');

  const handleInputChange = (e) => (
    setInputValue(e.currentTarget.value)
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setInputValue('');
    setTodoItem(inputValue);
  };

  return (
    <>
      <h1>To-do</h1>
      <TodoForm
        value={inputValue}
        onChange={handleInputChange}
        onSubmit={handleFormSubmit}
      />
      <TodoList
        todoItem={todoItem}
      />
    </>
  );
};

export default App;
