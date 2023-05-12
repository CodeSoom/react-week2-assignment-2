import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoLists from './components/TodoLists';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const randomId = () => Math.random().toString(12).substr(2, 16);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: randomId(), text: inputText }]);
    setInputText('');
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleClickComplete = (e) => {
    setTodos(todos.filter((item) => e.target.id !== item.id));
  };

  return (
    <div>
      <Header />
      <TodoInput
        inputText={inputText}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
      <TodoLists todos={todos} onClickComplete={handleClickComplete} />
    </div>
  );
}
