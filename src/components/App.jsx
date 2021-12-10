import { useState } from 'react';
import Page from './Page';

export default function App() {
  const [toDoList, setToDoList] = useState([]);

  function handlehandleAddList(item) {
    setToDoList([...toDoList, item]);
  }

  function handlehandleDeleteList(item) {
    const filtered = toDoList.filter((v) => v !== item);
    setToDoList(filtered);
  }

  return (
    <Page
      list={toDoList}
      handleAddList={handlehandleAddList}
      handleDeleteList={handlehandleDeleteList}
    />
  );
}
