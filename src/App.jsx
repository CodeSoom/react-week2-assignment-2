import React, { useState } from 'react';

import TodoInput from './TodoInput';
import TodoLists from './TodoLists';

import uuidv4 from '../utils/uuidv4';

function App() {
  const [inputText, setInputText] = useState({
    id: '',
    text: '',
  });
  const [todos, setTodos] = useState([]);

  function handleChangeInputText(e) {
    const { value } = e.target;

    setInputText({
      id: uuidv4(),
      text: value,
    });
  }

  function handleAddTodoList(e) {
    e.preventDefault();

    setTodos([...todos, inputText]);
    setInputText({
      id: '',
      text: '',
    });
  }

  function handleCompleteTodoList(todoListId) {
    const filteredTodos = todos.filter((todo) => todo.id !== todoListId);
    setTodos(filteredTodos);
  }

  return (
    <div>
      <p>To-do</p>
      <TodoInput
        onChange={handleChangeInputText}
        onSubmit={handleAddTodoList}
        inputText={inputText}
      />
      <div style={{ marginTop: '20px' }}>
        {todos.length ? (
          <TodoLists todos={todos} onClick={handleCompleteTodoList} />
        ) : (
          <div>할일이 없어요!</div>
        )}
      </div>
    </div>
  );
}

export default App;
