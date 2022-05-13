import React, { useState } from 'react';
import { toDoConstant } from './constant/todo';

export function ToDoList() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);

  const addToDo = () => {
    if (toDo === '') return;

    setToDos([...toDos, toDo]);
    return setToDo('');
  };

  const handleChange = (e) => {
    const toDoItem = e.target.value;
    setToDo(toDoItem);
  };

  return (
    <div>
      <h1>{toDoConstant.label}</h1>
      <form>
        <input
          type="text"
          placeholder={toDoConstant.placeHolder}
          onChange={handleChange}
        />
        <input type="reset" onClick={addToDo} value={toDoConstant.add} />
      </form>
      <div>
        {toDos.length === 0
          ? toDoConstant.noData
          : toDos.map((toDoItem) => <li>{toDoItem}</li>)}
      </div>
    </div>
  );
}
