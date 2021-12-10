import { useState } from 'react';
import ToDo from './ToDo';

export default function App() {
  const [toDos, setToDos] = useState([]);

  const onClickAppendToDo = (text) => {
    setToDos([...toDos, { id: Date.now() + text, text }]);
  };

  const onClickRemoveToDo = (id) => {
    setToDos(toDos.filter((item) => item.id !== id));
  };

  return (
    <ToDo
      appendHandler={onClickAppendToDo}
      removeHandler={onClickRemoveToDo}
      toDos={toDos}
    />
  );
}
