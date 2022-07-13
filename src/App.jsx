import React, { useState } from 'react';

import uuid from 'react-uuid';

import Input from './Input';
import Todo from './Todo';

export default function App() {
  const [todoItem, setTodoItem] = useState([]);
  const [inputTextValue, setInputTextValue] = useState('');

  const handleAddTodo = () => {
    const copyTodoItem = [...todoItem];
    copyTodoItem.push(inputTextValue);
    setTodoItem(copyTodoItem);
  };

  const handleSetInputTextValue = (e) => {
    setInputTextValue(e.target.value);
  };

  return (
    <div>
      <p>To-do</p>
      <Input handleClick={handleAddTodo} handleChange={handleSetInputTextValue} value={inputTextValue} />
      <ul>
        {todoItem.map((item) => (
          <Todo lable={item} key={uuid()} id={uuid()} />
        ))}
      </ul>
    </div>
  );
}
