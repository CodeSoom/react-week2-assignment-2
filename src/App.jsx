import React, { useState } from 'react';

import Todo from './Todo';

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [value, setValue] = useState('');

  function addTodoItem(newItem) {
    if (!newItem.trim()) return;
    const newItemId = `todo ${todoItems.length}`;
    setTodoItems([...todoItems, { todo: newItem, id: newItemId }]);
  }

  function removeSelectedTodo(selectedItem) {
    const newTodoItems = todoItems
      .filter((item) => item.id !== selectedItem.id)
      .map((item, index) => ({ todo: item.todo, id: `todo ${index}` }));
    setTodoItems(newTodoItems);
  }

  function onClickAddButton() {
    addTodoItem(value);
    setValue('');
  }

  function onInputChange(event) {
    setValue(event.target.value);
  }

  return (
    <Todo
      todoItems={todoItems}
      removeSelectedTodo={removeSelectedTodo}
      value={value}
      onClickAddButton={onClickAddButton}
      onInputChange={onInputChange}
    />
  );
}

export default App;
