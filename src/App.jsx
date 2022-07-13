import React, { useState } from 'react';

import uuid from 'react-uuid';

import Input from './Input';
import Todo from './Todo';

export default function App() {
  const [todoItem, setTodoItem] = useState([]);
  const [inputTextValue, setInputTextValue] = useState('');

  const handleAddTodo = () => {
    const result = [...todoItem];
    result.push(inputTextValue);
    setTodoItem(result);
  };

  const checkInputValue = (e) => {
    setInputTextValue(e.target.value);
  };

  return (
    <div>
      <p>To-do</p>
      <Input handleClick={handleAddTodo} handleChange={checkInputValue} value={inputTextValue} />
      <ul>
        {todoItem.map((item) => (
          <Todo lable={item} key={uuid()} id={uuid()} />
        ))}
      </ul>
    </div>
  );
}
