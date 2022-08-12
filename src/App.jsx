import { useState } from 'react';

import Form from './Form';
import ToDoList from './ToDoList';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) => ((c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15) >> c / 4).toString(16)); // eslint-disable-line no-bitwise
  }

  function handleInputValue({ target }) {
    setInputValue(target.value);
  }

  function handleClickAdd() {
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
          <ToDoList
            todos={todos}
            setTodos={setTodos}
            onClickRemove={handleRemoveList}
          />
        )}
    </div>
  );
}
