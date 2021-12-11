import { useState } from 'react';
import Page from './Page';

export default function App() {
  const [todoItem, setNewTodo] = useState('');
  const [todoArray, setTodoArray] = useState([]);

  function handleChange(e) {
    setNewTodo(e.target.value);
  }

  function handleAddTodo() {
    setTodoArray([...todoArray, todoItem]);
    setNewTodo('');
  }

  function handleFinishTodo(item) {
    setTodoArray(todoArray.filter((testItem) => item !== testItem));
  }

  return (
    <Page
      todoItem={todoItem}
      todoArray={todoArray}
      handleChange={handleChange}
      handleAddTodo={handleAddTodo}
      handleFinishTodo={handleFinishTodo}
    />
  );
}
