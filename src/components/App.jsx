import { useState } from 'react';
import Page from './Page';

export default function App() {
  const [toDoList, setToDoList] = useState([]);
  const [text, setText] = useState('');

  function handlehandleAddList(item) {
    const added = [...toDoList, item];
    setToDoList(added);
  }

  function handlehandleDeleteList(item) {
    const filtered = toDoList.filter((v) => v !== item);
    setToDoList(filtered);
  }

  return (
    <Page
      text={text}
      list={toDoList}
      setText={setText}
      handleAddList={handlehandleAddList}
      handleDeleteList={handlehandleDeleteList}
    />
  );
}
