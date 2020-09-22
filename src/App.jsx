import React, { useState } from 'react';
import Input from './Input';
import TodoList from './TodoList';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  function addTodoItem(newItem) {
    if (!newItem.trim()) return;
    const newItemId = `todo ${todoItems.length}`;
    setTodoItems([...todoItems, { todo: newItem, id: newItemId }]);
  }

  function removeTodoItem(selectedItem) {
    const newTodoItems = todoItems.filter((item) => item.id !== selectedItem.id);
    setTodoItems(newTodoItems);
  }

  return (
    <div>
      <h1>To-do</h1>
      <Input addTodoItem={addTodoItem} />
      <TodoList todoItems={todoItems} deleteTodoItem={removeTodoItem} />
    </div>
  );
}

export default App;
