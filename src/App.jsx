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

  return(
    <div>
      <h2>To-do</h2>
      <div>
        <input
          type="text"
          placeholder="enter todo thing"
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
              <button type="button">
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
