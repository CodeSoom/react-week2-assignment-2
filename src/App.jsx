import React, { useState } from 'react';

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
        <button
          type="submit"
          onClick={handleClickAddButton}
        >
          추가
        </button>
      </div>
      <div>
        <ul>
          {todoList.map((todoThing, i) => (
            <li key={i}>
              <span>
                {i + 1}. {todoThing}
              </span>
              <button
                type="button"
                onClick={() => handleClickRemoveButton(i)}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
