import { useState } from 'react';
import Page from './Page';

export default function App() {
  const [addedTodo, setaddedTodo] = useState(0);
  const [deletedTodoNumber, setDeletedTodoNumber] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setaddedTodo(e.target.firstChild.value);
    console.log(e.target.firstChild.value);
    e.target.firstChild.value = '';
  };

  const handleClick = (e) => {
    setDeletedTodoNumber(e.target.className);
    console.log(e.target.className);
  };

  return (
    <Page
      onClick={handleClick}
      onSubmit={handleSubmit}
      addedTodo={addedTodo}
      deletedTodoNumber={deletedTodoNumber}
    />
  );
}
