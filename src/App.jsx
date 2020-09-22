import React, { useState } from 'react';
import Form from './Form';
import TodoList from './TodoList';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  function addTodoItem(newItem) {
    setTodoItems([...todoItems, newItem]);
  }

  return (
    <div>
      <h1>To-do</h1>
      <Form addTodoItem={addTodoItem} />
      <TodoList todoItems={todoItems} />
    </div>
  );
}

export default App;
