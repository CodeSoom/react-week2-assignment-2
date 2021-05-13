/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import InputWithButton from './components/InputWithButton';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  function handleClickAdd() {
    if (todoInput === '') { return; }
    setTodoList([...todoList, todoInput]);
    setTodoInput('');
  }

  function handleClickComplete(completeIndex) {
    setTodoList(todoList.filter((todo, index) => index !== completeIndex));
  }

  return (
    <div>
      <h1>To-do</h1>

      <InputWithButton
        inputValue={todoInput}
        setInputValue={setTodoInput}
        handleClick={handleClickAdd}
      />
      {todoList.length === 0 ? (
        <p>할 일이 없어요!</p>
      ) : (
        <ol>
          {todoList.map((todo, index) => (
            <li key={`todo-${index}}`}>
              {todo}
              <button
                type="button"
                key={`button-${index}}`}
                onClick={() => handleClickComplete(index)}
              >
                완료
                {index}
              </button>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
