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

  const [inputValue, setInputValue] = useState(initialInputValue);

  function handleChangeInput(value) {
    setInputValue(value);
  }

  function addTodo(value) {
    const id = generateTodoId(todoList);
    setTodoList([...todoList, { id, value }]);
    setInputValue(initialInputValue);
  }

  function handleClear(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }
  return (
    <div>
      <TodoInput value={inputValue} onChange={handleChangeInput} onSubmit={addTodo} />
      <Todos todoList={todoList} onClick={handleClear} />
    </div>
  );
}
