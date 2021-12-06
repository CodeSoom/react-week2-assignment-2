import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [newTodoName, setNewTodoName] = useState('');
  const [todoList, setTodoList] = useState([]);

  function handleChangeNewTodo({ target: { value } }) {
    setNewTodoName(value);
  }

  function handleClickNewTodo() {
    setTodoList((prevState) => [...prevState, { name: newTodoName, done: false }]);
    setNewTodoName('');
  }

  return (
    <>
      <h1>To-do</h1>
      <p>
        <input type="text" value={newTodoName} onChange={handleChangeNewTodo} />
        <button type="button" onClick={handleClickNewTodo}>추가</button>
      </p>
      <p>
        <ol>
          {todoList.map((todo) => (
            <li>
              {todo.name}
              <button type="button">완료</button>
            </li>
          ))}
        </ol>
      </p>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
