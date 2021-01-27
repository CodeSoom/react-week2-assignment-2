import React, { useState } from 'react';

import Page from './Page';

function App() {
  const [todo, setTodo] = useState({
    todoText: '',
    todoList: [],
  });

  const { todoText, todoList } = todo;

  return (
    <Page todoText={todoText} todoList={todoList} setTodo={setTodo} />
  );
}

export default App;
