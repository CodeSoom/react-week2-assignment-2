import { useState } from 'react';

import Page from './Page';
import { initialTodos } from './Todos';

export default function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [text, setText] = useState('');

  function handleAddClick() {
    setText('');
    onAdd(createTodo(text));
  }

  return (  
    <Page
      onClick={handleAddClick}
    />
  );
}
