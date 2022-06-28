import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');

  const handleAddTodoItem = () => {
    if (todoValue === '') {
      alert('할 일을 입력해 주세요.');
      return;
    }

    const newTodo = { id: uuidv4(), text: todoValue };
    setTodos((prevTodos) => ([...prevTodos, newTodo]));
    setTodoValue('');
  };

  const handleRemoveTodoItem = (id) => {
    const filterTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(filterTodoList);
  };

  const handleChangeTodoInput = (e) => {
    const input = e.target.value;

    setTodoValue(input);
  };

  return (
    <>
      <p>To-do</p>
      <TodoInput
        todoValue={todoValue}
        onChange={handleChangeTodoInput}
        onAddTodoItem={handleAddTodoItem}
      />
      <TodoList todos={todos} onRemoveTodoItem={handleRemoveTodoItem} />
    </>
  );
}
