import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [toDo, setToDo] = useState([]);
  const [input, setInput] = useState('');

  function deleteTodoButton(e) {

  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.input,
    });
  }

  function handleTodoSubmit(e) {
    e.preventDefault();
    setToDo([
      ...toDo,
      {
        id: Date.now(),
        content: input,
      },
    ]);
    setInput('');
  }
  return (
    <div>
      <h1>To-do</h1>
      <input
        type="text"
        name="todoInput"
        id="todoInput"
        input={input}
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={handleTodoSubmit}
      >
        추가
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
