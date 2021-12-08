import React, { useState } from 'react';
import Page from './Page';

function App() {
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
    // 같은 값 제외한 나머지로 새로운 배열 만들어 todoArray에 저장
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

export default App;
