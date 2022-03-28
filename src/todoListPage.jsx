import React, { useState } from 'react';
import Todo from './todo';
import TodoInput from './todoInput';

function TodoListPage() {
  const [todoList, setTodoList] = useState([]);

  function handleSubmit(value) {
    setTodoList((prev) => [...prev, value]);
  }

  function handleClear(index) {
    setTodoList((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  }
  return (
    <div>
      <TodoInput onSubmit={handleSubmit} />
      <Todo>
        {todoList.map((todo, index) => (
          <Todo.List index={index} value={todo} onClick={() => handleClear(index)} />
        ))}
      </Todo>
    </div>
  );
}

export default TodoListPage;
