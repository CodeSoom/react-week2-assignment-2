import { useState } from 'react';

import TodoItems from './TodoItems';
import TodoForm from './TodoForm';

export default function App() {
  const [todoItems, setTodoItems] = useState([]);

  function addTodoItem(todoItem) {
    const newTodoItems = [...todoItems, todoItem];

    setTodoItems(newTodoItems);
  }

  function handleSubmitTodoForm(todoTitle = '') {
    const todoItem = {
      id: Date.now(),
      title: todoTitle,
    };

    addTodoItem(todoItem);
  }

  return (
    <div>
      <h1>To-do</h1>

      <TodoForm onSubmit={handleSubmitTodoForm} />

      <TodoItems todoItems={todoItems} />
    </div>
  );
}
