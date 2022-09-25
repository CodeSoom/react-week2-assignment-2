import React, { useState } from 'react';

import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import TodoItem from './TodoItem';

export default function TodoWrap() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function onInsertTodo() {
    const todo = {
      id: todos.length + 1,
      content: inputValue,
    };

    setInputValue('');

    setTodos([...todos, todo]);
  }

  function onDeleteTodo(id) {
    setTodos(todos.filter((item) => item.id !== id));
  }

  function onAddTodo(e) {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <h1>To-do!</h1>
      <TodoAdd
        onAddTodo={onInsertTodo}
        todoValue={inputValue}
        onChangeTodo={onAddTodo}
      />
      <TodoList>
        <TodoItem todoItems={todos} onDelete={onDeleteTodo} />
      </TodoList>
    </div>
  );
}
