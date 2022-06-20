import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Button from './components/common/Button';

import Input from './components/todo/Input';
import Todos from './components/todo/Todos';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState('');

  const handleInputChange = (e) => {
    setInputTodo(e.target.value);
  };

  const handleClickInsertButton = () => {
    const todoList = { text: inputTodo, id: uuidv4() };

    setTodos([...todos, todoList]);
    setInputTodo('');
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') { handleClickInsertButton(); }
  };

  const handleClickCompleteButton = (id) => {
    const newTodos = todos.filter((i) => i.id !== id);

    setTodos(newTodos);
  };

  return (
    <div>
      <h1>To-Do</h1>

      <Input
        onKeyPress={handleEnter}
        onChange={handleInputChange}
        placeholder="할 일을 입력해 주세요"
      >
        {inputTodo}
      </Input>

      <Button onClick={handleClickInsertButton}>추가</Button>

      <Todos todos={todos} onClick={handleClickCompleteButton} />

    </div>
  );
}
