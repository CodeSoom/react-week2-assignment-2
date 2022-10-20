import React, { useState } from 'react';

import TodoEditor from './TodoEditor';
import TodoList from './TodoList';

function Todo() {
  const [todo, setTodo] = useState({
    id: null,
    content: '',
  });

  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    setTodo({
      id: Date.now(),
      content: e.target.value,
    });
  };

  const handleClick = () => {
    if (todo.content === '') {
      return;
    }
    setTodoList([...todoList, { id: todo.id, content: todo.content }]);
    setTodo({
      id: null,
      content: '',
    });
  };

  const handleDelete = (id) => {
    setTodoList([...todoList].filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>To-do</h1>
      <TodoEditor onChange={handleChange} todo={todo} onClick={handleClick} />
      <TodoList todoList={todoList} onDelete={handleDelete} />
    </div>
  );
}

export default Todo;
