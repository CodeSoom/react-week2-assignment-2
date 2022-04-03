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

const initialInputValue = '';

export default function TodoListPage() {
  const [todoList, setTodoList] = useState([]);

  const [todoInputValue, setTodoInputValue] = useState(initialInputValue);

  function handleChangeInput(value) {
    setTodoInputValue(value);
  }

  function addTodo(value) {
    const id = generateTodoId(todoList);
    setTodoList([...todoList, { id, value }]);
    setTodoInputValue(initialInputValue);
  }

  function handleClear(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }
  return (
    <div>
      <TodoInput
        value={todoInputValue}
        onChange={handleChangeInput}
        onSubmit={addTodo}
      />
      <Todos
        todoList={todoList}
        onClick={handleClear}
      />
    </div>
  );
}
