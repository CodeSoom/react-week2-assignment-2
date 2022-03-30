import { useState } from 'react';

import Todos from './Todos';
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

  function addTodo(value) {
    const id = generateTodoId(todoList);
    setTodoList([...todoList, { id, value }]);
  }

  function handleClear(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }
  return (
    <div>
      <TodoInput onSubmit={addTodo} />
      <Todos todoList={todoList} onClick={handleClear} />
    </div>
  );
}
