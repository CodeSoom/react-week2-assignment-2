import React, { useState } from 'react';

import Button from './Button';

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  function handleChangeInput(todo) {
    setTodoInput(todo);
  }

  function handleClickAddButton() {
    setTodoList([...todoList, todoInput]);
    setTodoInput('');
  }

  function handleClickRemoveButton(index) {
    if (todoList.length === 1) {
      setTodoList([]);

      return;
    }

    setTodoList([
      ...todoList.slice(0, index),
      ...todoList.slice(index + 1, todoList.length),
    ])
  }

  return(
    <div>
      <h2>To-do</h2>
      <div>
        <input
          type="text"
          placeholder="enter todo thing"
          value={todoInput}
          onChange={(e) => handleChangeInput(e.target.value)}
        />
        <Button
          type="submit"
          buttonTitle="추가"
          onClick={handleClickAddButton}
        />
      </div>
      <div>
        <ul>
          {todoList.map((todoThing, i) => (
            <li key={i}>
              <span>
                {i + 1}. {todoThing}
              </span>
              <Button 
                type="button"
                buttonTitle="삭제"
                onClick={() => handleClickRemoveButton(i)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
