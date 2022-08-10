import { useState } from 'react';

import Form from './Form';
import ToDos from './ToDos';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [toDos, setToDos] = useState([]);

  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  function getId(toDolist) {
    if (toDolist.length === 0) return 1;
    return toDolist[toDolist.length - 1].id + 1;
  }

  function handleAddButtonClick(e) {
    e.preventDefault();
    const id = getId(toDos);
    setToDos([...toDos, { id, content: inputText }]);
    setInputText('');
  }

  function handleDeleteButtonClick(id) {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  }

  return (
    <>
      <h1>To-do</h1>
      <Form
        inputText={inputText}
        // eslint-disable-next-line react/jsx-no-bind
        onInputChange={handleInputChange}
        // eslint-disable-next-line react/jsx-no-bind
        onAddButtonClick={handleAddButtonClick}
      />
      {toDos.length === 0 ? <p>할 일이 없어요!</p>
        // eslint-disable-next-line react/jsx-no-bind
        : <ToDos toDos={toDos} onDeleteButtonClick={handleDeleteButtonClick} />}
    </>
  );
}
