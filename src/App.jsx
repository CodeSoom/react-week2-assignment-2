import React, { useState } from 'react';

import Page from './Page';

const App = () => {
  const [count, setCount] = useState(0);
  const [todoText, setTodoText] = useState('');
  const [todoArray, setTodoArray] = useState([]);

  function handleChangeTodoText(event) {
    setTodoText(event.target.value);
  }

  function handleClickAddTodo() {
    if (!todoText) throw new Error('No content!');

    setTodoArray([...todoArray, { id: count, text: todoText }]);
    setCount(count + 1);
    setTodoText('');
  }

  function handleClickDeleteTodo({ id }) {
    setTodoArray(todoArray.filter((todo) => todo.id !== id));
  }

  return (
    <Page
      todoText={todoText}
      onChangeTodoText={handleChangeTodoText}
      todoArray={todoArray}
      onClickAddTodo={handleClickAddTodo}
      onClickDeleteTodo={handleClickDeleteTodo}
    />
  );
};

export default App;
