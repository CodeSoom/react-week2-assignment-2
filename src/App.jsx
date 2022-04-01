import { useState } from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoValue, setTodoValue] = useState('');

  function handleChangeInput(value) {
    setTodoValue(value);
  }

  function handleAdd() {
    setTodoList([...todoList, { id: Date.now(), name: todoValue }]);
    setTodoValue('');
  }

  function handleDelete(todo) {
    setTodoList((preTodoList) =>
      preTodoList.filter((preTodo) => preTodo.id !== todo.id),
    );
  }

  return (
    <>
      <h1>To-do</h1>
      <TodoInput
        inputValue={todoValue}
        onAdd={handleAdd}
        onChange={handleChangeInput}
      />
      <TodoList todoList={todoList} onDelete={handleDelete} />
    </>
  );
}
