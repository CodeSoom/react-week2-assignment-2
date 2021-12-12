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
    const temp = [...todoList];
    const idx = temp.findIndex((item) => item.key === key);

    if (idx <= -1) {
      return;
    }

    temp.splice(idx, 1);
    setTodoList(temp);
  };

  return <Page list={todoList} onInsert={onInsert} onFinish={onFinish} />;
}
