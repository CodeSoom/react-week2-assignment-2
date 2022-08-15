import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import Form from './Form';
import TodoList from './TodoList';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  function handleInputValue({ target }) {
    setInputValue(target.value);
  }

  function handleClickAdd(e) {
    e.preventDefault();
    setTodos([
      ...todos, { id: uuidv4(), value: inputValue },
    ]);
    setInputValue('');
  }

  function handleRemoveList(id) {
    setTodos(
      todos.filter((todo) => todo.id !== id),
    );
  }

  return (
    <div>
      <h1>To-do</h1>
      <Form
        inputValue={inputValue}
        onChangeInput={handleInputValue}
        onClickAdd={handleClickAdd}
      />
      { todos.length === 0 ? <p>할 일이 없어요!</p>
        : (
          <TodoList
            todos={todos}
            onClickRemove={handleRemoveList}
          />
        )}
    </div>
  );
}
