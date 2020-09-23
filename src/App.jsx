import React, { useState } from 'react';

import Page from './Page';

const App = () => {
  const [count, setCount] = useState(0);
  const [todoText, setTodoText] = useState('');
  const [todoArray, setTodoArray] = useState([]);

  function updateTodoText(event) {
    setTodoText(event.target.value);
  }

  function addTodo() {
    if (!todoText) throw new Error('No content!');

    setTodoArray([...todoArray, { id: count, text: todoText }]);
    setCount(count + 1);
    setTodoText('');
  }

  function deleteTodo({ id }) {
    setTodoArray(todoArray.filter((todo) => todo.id !== id));
  }

  return (
    <Page
      todoText={todoText}
      updateTodoText={updateTodoText}
      todoArray={todoArray}
      addTodo={addTodo}
      deleteTodo={deleteTodo}
    />
  );
};

export default App;
