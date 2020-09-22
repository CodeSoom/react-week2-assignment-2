import React, { useState } from 'react';
import Form from './Form';
import TodoList from './TodoList';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  function addTodoItem(newItem) {
    setTodoItems([...todoItems, newItem]);
  }

  function removeTodoItem(selectedItem) {
    const newTodoItems = todoItems.filter((item) => item !== selectedItem);
    setTodoItems(newTodoItems);
  }

  return (
    <div>
      <h1>To-do</h1>
      <Form addTodoItem={addTodoItem} />
      <TodoList todoItems={todoItems} deleteTodoItem={removeTodoItem} />
    </div>
  );
}

export default App;
