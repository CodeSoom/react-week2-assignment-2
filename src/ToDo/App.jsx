import { useState } from 'react';

import Form from './Form';
import Todos from './Todos';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  function getId(todoList) {
    if (todoList.length === 0) return 1;
    return todoList[todoList.length - 1].id + 1;
  }

  function handleAddButtonClick(e) {
    e.preventDefault();
    const id = getId(todos);
    setTodos([...todos, { id, content: inputText }]);
    setInputText('');
  }

  function handleDeleteButtonClick(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <h1>To-do</h1>
      <Form
        inputText={inputText}
        onInputChange={handleInputChange}
        onAddButtonClick={handleAddButtonClick}
      />
      {todos.length === 0 ? <p>할 일이 없어요!</p>
        : <Todos todos={todos} onDeleteButtonClick={handleDeleteButtonClick} />}
    </>
  );
}
