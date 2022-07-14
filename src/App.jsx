import React, { useState } from 'react';

import { v4 as uuid } from 'uuid';

import Input from './Input';
import Todo from './Todo';

export default function App() {
  const [todoItem, setTodoItem] = useState([]);
  const [inputTextValue, setInputTextValue] = useState('');

  const handleAddTodo = () => {
    const copyTodoItem = [...todoItem];
    copyTodoItem.push({
      id: uuid(),
      content: inputTextValue,
    });
    setTodoItem(copyTodoItem);
  };

  const handleSetInputTextValue = (e) => {
    setInputTextValue(e.target.value);
  };

  const handleDeleteTodo = (currentTodoItemId) => {
    const countOutCurrentTodoArray = todoItem.filter((item) => item.id !== currentTodoItemId);
    setTodoItem(countOutCurrentTodoArray);
  };

  return (
    <div>
      <p>To-do</p>
      <Input handleClick={handleAddTodo} handleChange={handleSetInputTextValue} inputTextValue={inputTextValue} />
      <ul>
        {todoItem.map((item) => (
          <Todo label={item.content} key={item.id} id={item.id} handleDeleteTodo={handleDeleteTodo} />
        ))}
      </ul>
    </div>
  );
}
