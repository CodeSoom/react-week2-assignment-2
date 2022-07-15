import React, { useState } from 'react';

import { v4 as uuid } from 'uuid';

import Form from './Form';
import Todo from './Todo';

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoItemInput, setTodoItemInput] = useState('');

  const handleAddTodoItem = () => {
    const newTodoItem = [
      {
        id: uuid(),
        content: todoItemInput,
      },
    ];

    setTodoList([...todoList, ...newTodoItem]);
    setTodoItemInput('');
  };

  const handleSetTodoItemInput = (e) => {
    setTodoItemInput(e.target.value);
  };

  const handleDeleteTodo = (currentTodoItemId) => {
    const countOutCurrentTodoArray = todoList.filter((item) => {
      const notSameCurrentItem = item.id !== currentTodoItemId;
      return notSameCurrentItem;
    });
    setTodoList(countOutCurrentTodoArray);
  };

  if (todoList.length === 0) {
    return (
      <div>
        <p>To-do</p>
        <Form
          handleClick={handleAddTodoItem}
          handleChange={handleSetTodoItemInput}
          todoItemInput={todoItemInput}
        />
        <p>할 일이 없어요!</p>
      </div>
    );
  }

  return (
    <div>
      <p>To-do</p>
      <Form
        handleClick={handleAddTodoItem}
        handleChange={handleSetTodoItemInput}
        todoItemInput={todoItemInput}
      />
      <ul>
        {todoList.map((item) => (
          <Todo
            label={item.content}
            key={item.id}
            id={item.id}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}
