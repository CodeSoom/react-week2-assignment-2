import React, { useState } from 'react';
import Page from './Page';

export default function App() {
  const [todoList, setTodoList] = useState([]);

  const onInsert = (text) => {
    setTodoList((oldArray) => [
      ...oldArray,
      { key: todoList.length + 1, text },
    ]);
  };

  const onFinish = (key) => {
    setTodoList(todoList.filter((item) => item.key !== key));
  };

  return <Page list={todoList} onInsert={onInsert} onFinish={onFinish} />;
}
