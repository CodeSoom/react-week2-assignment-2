import { useState } from 'react';
import ToDo from './ToDo';

export default function App() {
  const [toDos, setToDos] = useState([]);
  const [newToDoValue, setNewToDoValue] = useState('');

  const onClickAppendToDo = (text) => {
    setToDos([...toDos, { id: Date.now() + text, text }]);
  };

  const onClickRemoveToDo = (id) => {
    setToDos(toDos.filter((item) => item.id !== id));
  };

  const onChangeInput = ({ target: { value } }) => {
    setNewToDoValue(value);
  };

  const resetInputValue = () => {
    setNewToDoValue('');
  };

  return (
    <ToDo
      appendToDoHandler={onClickAppendToDo}
      removeToDoHandler={onClickRemoveToDo}
      changeInputHandler={onChangeInput}
      newToDoValue={newToDoValue}
      resetInputValue={resetInputValue}
      toDos={toDos}
    />
  );
}
