import { useState } from 'react';
import ToDo from './ToDo';

export default function App() {
  const [list, setList] = useState([]);

  const onClickAppendToDo = (text) => {
    setList([...list, { id: Date.now() + text, text }]);
  };

  const onClickRemoveToDo = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <ToDo
      appendHandler={onClickAppendToDo}
      removeHandler={onClickRemoveToDo}
      list={list}
    />
  );
}
