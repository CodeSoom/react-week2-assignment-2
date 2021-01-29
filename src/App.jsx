import React, { useState } from 'react';

import Page from './Page';

function App() {
  const templetes = ['1시간 홈트', '1일 1 야채', '1일 1 과일'];
  const [selectedTemplete, setSelectedTemplete] = useState(null);

  const initialState = [{
    id: 0,
    content: '',
  }];

  const [todos, setTodos] = useState(initialState);

  function handleAddTodo(todo) {
    const newTodo = {
      id: todos.length + 1,
      content: todo,
    };

    setTodos([...todos, newTodo]);
    setSelectedTemplete(null);
  }

  function handleDeleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleSelectTemplete(item) {
    setSelectedTemplete(item);
  }

  return (
    <Page
      todos={todos}
      templetes={templetes}
      handleAddTodo={handleAddTodo}
      handleDeleteTodo={handleDeleteTodo}
      onClickTemplte={handleSelectTemplete}
      templete={selectedTemplete}
    />
  );
}

export default App;
