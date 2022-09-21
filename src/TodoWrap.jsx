import React, { useState, useRef } from 'react';

import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import TodoItem from './TodoItem';

export default function TodoWrap() {
  const [todos, setTodos] = useState([]);
  const nextId = useRef(1);

  function onInsertTodo(text) {
    const todo = {
      idx: nextId.current,
      text,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  }

  function onDeleteTodo(idx) {
    setTodos(todos.filter((item) => item.idx !== idx));
  }

  return (
    <div>
      <h1>To-do!</h1>
      <TodoAdd onInsert={onInsertTodo} />
      <TodoList>
        <TodoItem data={todos} onDelete={onDeleteTodo} />
      </TodoList>
    </div>
  );
}
