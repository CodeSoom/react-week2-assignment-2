import React, { useState } from 'react';

import Page from './Page';

const App = () => {
  const [count, setCount] = useState(0);
  const [todoText, setTodoText] = useState('');
  const [todoList, setTodoList] = useState([]);

  function updateTodoText({ text }) {
    setTodoText(text);
  }

  function addTodo({ text }) {
    if (!text) throw new Error('No content!');

    setTodoList([...todoList, { id: count, text }]);
    setCount(count + 1);
    setTodoText('');
  }

  function deleteTodo({ id }) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  return (
    <Page
      todoText={todoText}
      updateTodoText={updateTodoText}
      todoList={todoList}
      addTodo={addTodo}
      deleteTodo={deleteTodo}
    />
  );
};

export default App;
