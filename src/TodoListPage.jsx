import { useState } from 'react';

import Todo from './Todo';
import TodoInput from './TodoInput';

import generateId from './generateId';

function generateTodoId(todoList) {
  const id = generateId();

  if (todoList.some((todo) => todo.id === id)) {
    return generateId(todoList);
  }

  return id;
}

export default function TodoListPage() {
  const [todoList, setTodoList] = useState([]);

  function handleSubmit(value) {
    const id = generateTodoId(todoList);
    setTodoList([...todoList, { id, value }]);
  }

  function handleClear(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }
  return (
    <div>
      <TodoInput onSubmit={handleSubmit} />
      <Todo>
        {todoList.map((todo) => (
          <Todo.List todo={todo} onClick={handleClear} />
        ))}
      </Todo>
    </div>
  );
}
