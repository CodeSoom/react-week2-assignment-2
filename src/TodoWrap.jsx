import React, { useState } from 'react';

import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import TodoItem from './TodoItem';

export default function TodoWrap() {
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(1);
  const [addContent, setAddContent] = useState('');

  function onInsertTodo(text) {
    const todo = {
      id: todoId,
      text,
    };
    setTodos(todos.concat(todo));
    setTodoId(todoId + 1);
  }

  function onDeleteTodo(id) {
    setTodos(todos.filter((item) => item.id !== id));
  }

  function onAddTodos() {
    onInsertTodo(addContent);
    setAddContent('');
  }

  return (
    <div>
      <h1>To-do!</h1>
      <TodoAdd onAdd={onAddTodos} inputValue={addContent} changeValue={setAddContent} />
      <TodoList>
        <TodoItem todoList={todos} onDelete={onDeleteTodo} />
      </TodoList>
    </div>
  );
}
