import { useState } from 'react';
import Page from './Page';

export default function App() {
  const [toDoList, setToDoList] = useState([]);

  function addList(item) {
    setToDoList([...toDoList, item]);
  }

  function deleteList(item) {
    const filtered = toDoList.filter((v) => v !== item);
    setToDoList(filtered);
  }

  return (
    <Page
      list={toDoList}
      addList={addList}
      deleteList={deleteList}
    />
  );
}
