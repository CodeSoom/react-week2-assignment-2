import React, { useState } from 'react';
import Todo from './Todo';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  function addTodoItem(newItem) {
    if (!newItem.trim()) return;
    const newItemId = `todo ${todoItems.length}`;
    setTodoItems([...todoItems, { todo: newItem, id: newItemId }]);
  }

  function removeSelectedTodo(selectedItem) {
    const newTodoItems = todoItems.filter((item) => item.id !== selectedItem.id);
    setTodoItems(newTodoItems);
  }

  return (
    <Todo addTodoItem={addTodoItem} todoItems={todoItems} removeSelectedTodo={removeSelectedTodo} />
  );
}

export default App;
