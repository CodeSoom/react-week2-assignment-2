import { useState } from 'react';
import Page from './Page';

export default function App() {
  const [todoItem, setNewTodo] = useState('');
  const [todoArray, setTodoArray] = useState([]);

  function handleChange(e) {
    setNewTodo(e.target.value);
  }

  function addTodo() {
    setTodoArray([...todoArray, todoItem]);
    setNewTodo('');
  }

  function finishTodo(item) {
    setTodoArray(todoArray.filter((testItem) => item !== testItem));
  }

  return (
    <Page
      todoItem={todoItem}
      todoArray={todoArray}
      handleChange={handleChange}
      addTodo={addTodo}
      finishTodo={finishTodo}
    />
  );
}
